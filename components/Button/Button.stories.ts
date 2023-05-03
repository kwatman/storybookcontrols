import type { Meta } from "@storybook/vue3";

import Button from "./Button.vue";
import Text from "../Text/Text.vue";
import { ref } from "vue";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Button, Text }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
        <Button>Click me</Button>
    `,
  }),
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
