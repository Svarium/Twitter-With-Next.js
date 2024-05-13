
import UserTabs from '@/components/users/UserTabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Users/UserTabs',
    component: UserTabs,
    parameters: {     
      layout: 'centered',
    },
    tags: ['autodocs'], 
  } satisfies Meta<typeof UserTabs>;

  const messages = [
    {
        name: 'Anomander Rake',
        username:'Anomander',
        message: 'Segundo mensaje',
        repliesCount: 13
    },
    {
        name: 'Anomander Rake',
        username:'Anomander',
        message: 'Primer mensaje',
        repliesCount: 13,
    },
]

const replies = [
    {
        name: 'Ben el Rápido',
        username:'Ben',
        message: 'Tercer mensaje',
        repliesCount: 13
    },
    {
        name: 'Karsa Orlong',
        username:'Karsa',
        message: 'Cuarto mensaje',
        repliesCount: 13,
    },
]



export default meta;
type Story = StoryObj<typeof meta>;

export const MessageTab: Story = {
    args: {
      messages: messages,
      replies : replies     
    },
  };