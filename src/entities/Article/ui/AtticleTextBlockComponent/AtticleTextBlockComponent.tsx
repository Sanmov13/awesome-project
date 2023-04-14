import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AtticleTextBlockComponent.module.scss"
interface AtticleTextBlockComponentProps {
className?: string;
}

export const AtticleTextBlockComponent = ({ className }: AtticleTextBlockComponentProps) => {
return (
<div className={classNames(cls.AtticleTextBlockComponent, {}, [])}>

</div>
)
}