import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      icon: "discover",
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },

    // "slides",
  ],

  "/zh/python/": [
    {
      text: "Python编程基础语法",
      icon: "python",
      prefix: "base/",
      link: "base/",
      children: "structure",
    },
  ]
});
