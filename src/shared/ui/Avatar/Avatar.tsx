import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src?: string
    size?: number;
    alt?: string;
    className?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProps) => {
    const mods: Mods = {};

    const sizes = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img src={src} alt={alt} className={classNames(cls.Avatar, mods, [className])} style={sizes} />
    );
};
