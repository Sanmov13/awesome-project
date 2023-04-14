import { ComponentStory, ComponentMeta } from '@storybook/react';

import {[FTName]} from './[FTName]';

export default {
    title: 'features/[FTName]',
    component: [FTName],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof [FTName]>;

const Template: ComponentStory<typeof [FTName]> = (args) => <[FTName] {...args} />;

export const Primary = Template.bind({});
Primary.args = {};