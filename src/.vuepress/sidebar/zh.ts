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
      text: "Python语法和应用",
      icon: "python",
      prefix: "base/",
      link: "base/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "数据分析和处理",
      icon: "calculate",
      prefix: "data/",
      link: "data/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "PyWin32",
      icon: "windows",
      prefix: "pywin32/",
      link: "pywin32/",
      children: "structure",
      collapsible: true,
    },
  ],

  "/zh/machine/": [
    {
      text: "图像处理与任务识别",
      icon: "pic",
      prefix: "image/",
      link: "image/",
      children: "structure",
      collapsible: true,
    },
  ]

});
