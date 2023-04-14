import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AtticleCodeBlockComponent.module.scss';

interface AtticleCodeBlockComponentProps {
className?: string;
}

export const AtticleCodeBlockComponent = ({ className }: AtticleCodeBlockComponentProps) => (
    <div className={classNames(cls.AtticleCodeBlockComponent, {}, [className])} />
);
