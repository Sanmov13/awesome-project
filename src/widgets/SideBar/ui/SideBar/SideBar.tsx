import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { ThemeSwitcher } from "ThemeSwitcher";
import cls from "./SideBar.module.scss";
interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={cls.switchers}>
      <ThemeSwitcher />
      <LanguageSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};
