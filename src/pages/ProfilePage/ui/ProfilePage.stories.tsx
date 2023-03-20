import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

// export default {
//     title: 'pages/ProfilePage',
//     component: ProfilePage,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof ProfilePage>;

// const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

// export const Light = Template.bind({});
// Light.args = {};
// Light.decorators = [StoreDecorator({})];

// export const Dark = Template.bind({});
// Dark.args = {};

// Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
