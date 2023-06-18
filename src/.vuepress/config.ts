import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/AI/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Artificial Intelligence",
      description: "python and machine learning",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "人工智能",
      description: "人工智能(机器学习)相关内容",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
