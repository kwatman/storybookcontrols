import type { Preview } from "@storybook/vue3";
import "../assets/css/tailwind.css";

const customViewports = {
  web1920: {
    name: "1920x1080",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  web393: {
    name: "393x786",
    styles: {
      width: "393px",
      height: "786px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
