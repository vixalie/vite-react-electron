# Vite-React-Tailwind CSS-Electron Boilerplate

这是一个使用 React 开发 Electron 应用的项目模板，其中整合了 Tailwind CSS 和 Emotion 库，项目构建和编译打包使用 Vite。

## 模板使用方法

推荐使用[`degit`](https://github.com/Rich-Harris/degit)对本仓库内容快速克隆使用。`degit`可以使用以下命令安装。

```bash
npm install -g degit
```

然后可以使用以下命令使用本仓库的内容。

```bash
degit https://github.com/vixalie/vite-react-electron.git your_project_folder
```

在完成项目内容的初始建立以后，就可以修改`package.json`中的基本内容成自己所需要的，然后就可以开始项目的正式开发了。

本模板在macOS和Linux系统中可以通过运行`npm run dev`自动启动Renderer线程和Main线程的实时编译，以及Electron内容的实时加载。但Windows平台需要重新编写`wait-for`脚本以支持Electron的延迟启动。

## 预置依赖说明

模板已经预置了以下依赖库。

- Typescript 4.6.3
- React 18
- Emotion/React 11.9.0
- Less 4.1.2
- Tailwind CSS 3.0.24
- Twin.macro 2.8.2
- Electron 18.1.0

模板中没有内置任何路由库以及状态管理库，你可以根据自己的需要和喜好自行选择使用。
