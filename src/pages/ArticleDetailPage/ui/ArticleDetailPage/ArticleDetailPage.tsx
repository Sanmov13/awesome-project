import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';

interface ArticleDetailPageProps {
className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => (
    <div className={classNames(cls.ArticleDetailPage, {}, [])}>
        Article Detail
    </div>
);

export default ArticleDetailPage;
