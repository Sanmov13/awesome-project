import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    border?: string;
    className?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        height,
        width,
        border,
        className,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles} />
    );
};
