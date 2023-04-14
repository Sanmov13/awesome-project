import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AtticleTextBlockComponent } from './AtticleTextBlockComponent';

export default {
    title: 'features/AtticleTextBlockComponent',
    component: AtticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AtticleTextBlockComponent>;

const Template: ComponentStory<typeof AtticleTextBlockComponent> = (args) => <AtticleTextBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
