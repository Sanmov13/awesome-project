import { classNames } from "shared/lib/classNames/classNames"
import cls from "./[FTName].module.scss";
import { useTranslation } from 'react-i18next';
interface [FTName]Props {
className?: string;
}

export const [FTName] = ({ className }: [FTName]Props) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.[FTName], {}, [className])}>

        </div>
)
}