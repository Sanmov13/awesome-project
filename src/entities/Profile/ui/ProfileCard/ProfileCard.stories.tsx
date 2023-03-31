import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile/model/types/Profile';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatarImg from 'shared/assets/icons/avatarImg.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        lastname: 'Tapchaev',
        city: 'Grozny',
        age: 25,
        first: 'Lecha',
        username: 'Tapch',
        currency: Currency.USD,
        country: Country.Canada,
        avatar: avatarImg,
    },
};

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
