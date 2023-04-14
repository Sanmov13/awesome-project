import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'features/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
