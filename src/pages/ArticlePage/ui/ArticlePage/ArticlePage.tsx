import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
className?: string;
}

const ArticlePage = ({ className }: ArticlePageProps) => (
    <div className={classNames(cls.ArticlePage, {}, [])}>
        Article Page
    </div>
);

export default ArticlePage;
