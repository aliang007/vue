# SPA单页面


    |-- build                                  //webpack配置文件
    |-- config                                 // 项目打包路径
    |-- static                                 // 静态文件目录
    |-- src                                    // 源码目录
    |   |-- assets                             
    |   |-- components                         // 组件
    |   |-- router
    |   |   |-- index.js                       // 路由配置
    |   |-- pages
    |     |-- index.vue                        // 页面入口
    |     |-- detail.vue                       // 详情页面
    |   |-- main.js                            // 程序入口
    |-- .babelrc                               // ES6语法编译配置
    |-- .editorconfig                          // 代码编写规格
    |-- .gitignore                             // push忽略文件
    |-- index.html                             // 入口html页面
    |-- package.json                           // 依赖及配置
    |-- README.md                              // 简介




```
全局装vue-cli，它是vue的一个脚手架
npm i -g vue-cli

安装依赖
npm i

浏览器跑起来
npm run dev

# build for production with minification
npm run build


# build for production and view the bundle analyzer report
npm run build --report

```