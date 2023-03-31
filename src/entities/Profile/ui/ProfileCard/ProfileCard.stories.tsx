import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'entities/Country/model/types/Country';
import { Currency } from 'entities/Currency';
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
        first: 'Lecha',
        lastname: 'Tapchaev',
        age: 25,
        city: 'Grozny',
        avatar: avatarImg,
        username: 'Tapch',
        currency: Currency.USD,
        country: Country.Canada,
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
