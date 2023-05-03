import type { Meta } from "@storybook/vue3";

import Input from "./Input.vue";
import Text from "../Text/Text.vue";
import { ref } from "vue";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  render: (args) => ({
    components: { Input }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
        <Input :label="args.label"  :placeholder="args.placeholder" />
    `,
  }),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "this is placeholder text",
  },
};

export const ReadValue: Story = {
  render: (args) => ({
    components: { Input }, // Notice that `MyComponent` is not imported here
    setup: () => {
      let data = ref("initial data");
      return { args, data };
    },
    template: `
      <Input v-model="data" :placeholder="args.placeholder" />
      <p> <b> the text:</b> {{data}} </p>
    `,
  }),
  args: {
    placeholder: "this is placeholder text",
  },
};
