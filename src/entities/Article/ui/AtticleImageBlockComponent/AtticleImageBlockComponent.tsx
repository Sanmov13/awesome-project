import { classNames } from "shared/lib/classNames/classNames"
import cls from "./AtticleImageBlockComponent.module.scss"
interface AtticleImageBlockComponentProps {
className?: string;
}

export const AtticleImageBlockComponent = ({ className }: AtticleImageBlockComponentProps) => {
return (
<div className={classNames(cls.AtticleImageBlockComponent, {}, [])}>

</div>
)
}