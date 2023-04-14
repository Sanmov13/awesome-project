import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AtticleImageBlockComponent } from './AtticleImageBlockComponent';

export default {
    title: 'features/AtticleImageBlockComponent',
    component: AtticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AtticleImageBlockComponent>;

const Template: ComponentStory<typeof AtticleImageBlockComponent> = (args) => <AtticleImageBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
