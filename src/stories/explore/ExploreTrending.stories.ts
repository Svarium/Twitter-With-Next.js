import ExploreTrending from '@/components/explore/ExploreTrending';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Explore/ExploreTrending',
    component: ExploreTrending,
    parameters: {     
      layout: 'centered',
    },
    tags: ['autodocs'], 
  } satisfies Meta<typeof ExploreTrending>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        hashes:[
          {
          hash: "Malaz", count:2
          },
          {
            hash: "La Rueda", count:1
          }

      ]
    },
  };

  export const Empty: Story = {
    args: {
        hashes:[]
    },
  };


  export const MoreThan3: Story = {
    args: {
        hashes:[
          {
          hash: "Malaz", count:2
          },
          {
            hash: "La Rueda", count:1
          },
          {
            hash: "Sanderson", count:5
          }

      ]
    },
  };