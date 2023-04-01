import { classNames } from "shared/lib/classNames/classNames"
import cls from "./[FTName].module.scss"
interface [FTName]Props {
className?: string;
}

export const [FTName] = ({ className }: [FTName]Props) => {
return (
<div className={classNames(cls.[FTName], {}, [])}>

</div>
)
}