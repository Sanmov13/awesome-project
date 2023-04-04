import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticlePage from './ArticlePage';

export default {
    title: 'pages/ArticlePage',
    component: ArticlePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
