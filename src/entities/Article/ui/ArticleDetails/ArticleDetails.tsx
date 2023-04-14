import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from 'entities/Article/model/Slice/articleDetailsSlice';
import { memo, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useTranslation } from 'react-i18next';
import { getArticleDeatilsData, getArticleDeatilsError, getArticleDeatilsisLoading } from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
className?: string;
id: string;
}

const reducers: ReducersList = {
    articleDetails: articleReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();
    // const isLoading = useSelector(getArticleDeatilsisLoading);
    const isLoading = true;
    const error = useSelector(getArticleDeatilsError);
    const article = useSelector(getArticleDeatilsData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [id, dispatch]);

    let content;

    if (isLoading) {
        content = (
            <>
                <div><Skeleton className={cls.avatar} width={200} height={200} border="50%" /></div>
                <div><Skeleton className={cls.title} width={300} height={32} /></div>
                <div><Skeleton className={cls.skeleton} width={600} height={24} /></div>
                <div><Skeleton className={cls.skeleton} width="100%" height={200} /></div>
                <div><Skeleton className={cls.skeleton} width="100%" height={200} /></div>
            </>
        );
    } else if (error) {
        content = (
            <div>
                <Text
                    title={t('Error with loading article')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    } else {
        content = (
            <div>{t('ARTICLE DETAILS')}</div>
        );
    }

    return (
        <DynamicModuleLoader reducer={reducers} removeReducer>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
