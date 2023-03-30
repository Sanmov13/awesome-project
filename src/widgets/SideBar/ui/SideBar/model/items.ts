import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import React from 'react';
import About from 'shared/assets/icons/aboutR.svg';
import Main from 'shared/assets/icons/main.svg';
import Profile from 'shared/assets/icons/Vector.svg';

export interface SideBarType {
    path: string,
    text: string,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean
}

export const SideBarItemList: SideBarType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        icon: Main,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        icon: About,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        icon: Profile,
        authOnly: true,
    },
];
