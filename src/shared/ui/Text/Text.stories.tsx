import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text lorem ipsum',
    text: 'My name is Gustavo but you call me Gass',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Text lorem ipsum',
    text: 'My name is Gustavo but you call me Gass',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Text lorem ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'My name is Gustavo but you call me Gass',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text lorem ipsum',
    text: 'My name is Gustavo but you call me Gass',
};
PrimaryDark.decorators = ([ThemeDecorator(Theme.DARK)]);

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Text lorem ipsum',
};
OnlyTitleDark.decorators = ([ThemeDecorator(Theme.DARK)]);

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'My name is Gustavo but you call me Gass',
};
OnlyTextDark.decorators = ([ThemeDecorator(Theme.DARK)]);
