import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AtticleCodeBlockComponent } from 'entities/Article/ui/AtticleCodeBlockComponent/AtticleCodeBlockComponent';

export default {
    title: 'features/AtticleCodeBlockComponent',
    component: AtticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AtticleCodeBlockComponent>;

const Template: ComponentStory<typeof AtticleCodeBlockComponent> = (args) => <AtticleCodeBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
