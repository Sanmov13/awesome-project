import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Text nbtjbtb nttjntjnjgntg tngtgjtnjtngt gntgjtnjtngt tngjtngtjnjntg njgntjgntjgnt tnjgntjgntjgt jngtjgntjgntg jngtjgnt',
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    isOpen: true,
    children: 'Text nbtjbtb nttjntjnjgntg tngtgjtnjtngt gntgjtnjtngt tngjtngtjnjntg njgntjgntjgnt tnjgntjgntjgt jngtjgntjgntg jngtjgnt',
};
ModalDark.decorators = ([ThemeDecorator(Theme.DARK)]);
