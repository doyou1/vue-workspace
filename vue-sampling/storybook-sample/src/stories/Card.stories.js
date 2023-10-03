// Card.stories.js

import Card from '@/components/Card.vue';

//👇 This default export determines where your story goes in the story list
export default {
  title: "Card",
  component: Card,
  argTypes: {
    title: "String",
    subText: "String",
    mediaHref: "String",
    supportingText: "String",
  }
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    title: "title", subText: "subText"
  },
};

export const Secondary = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    title: "title", subText: "subText", mediaHref: "/vite.svg"
  },
};

export const Third = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    title: "title", subText: "subText", mediaHref: "/vite.svg", supportingText: "supportingText"
  },
};
