## 一、editorConfig

+ [官网](https://editorconfig.org/)

+ 由于 VSCode 毕竟是文本编辑器，它和 大型IDE相比，IDE的插件都是软件集成的，而VSCode的插件基本上都来自第三方。

+ 这里的 editorConfig 用来约束同一份代码在不同的电脑不同的编辑器中的风格统一。

+ 安装：

  + 打开 VSCode 扩展，搜索 editorConfig，然后从结果中找到 EditorConfig for VS Code，点击安装。

  + 打开一个项目的代码文件夹，我们就以 Vue项目为例，一般情况下，项目的根目录就会有一个 .editorConfig 文件，这个文件里面配置了编辑器风格。

  + 如果项目根目录中没有 .editorConfig 文件，那么我们就需要手动创建一个。

  + .editorConfig 查找规则可以去 [EditorConfig官网](https://editorconfig.org/) 看看

  + 然后我们来编辑这个 .editorConfig 文件，更多配置可以去 [EditorConfig官网](https://editorconfig.org/) 看看

    ```properties
    # 这表示：当VSCode找到这个文件时，就不需要在往上层目录继续找了
    root = true
    
    # 这里的 * 表示 通配符，代表所有类型的文件
    [*]
    # 设置 编码方式
    charset = utf-8
    # 设置 缩进风格，接受 space | tab
    indent_style = space
    # 设置 缩进大小，接受整数
    indent_size = 4
    # 设置 换行符，接受 cr | lf | crlf ， cr 是 MacOS 专用，lf 是 Linux 专用，crlf 是 Windows 专用，正常情况下，统一使用 lf
    end_of_line = lf
    # 设置 是否在结尾增加一个空行，一般主流的代码规范中都要求在结尾加一个空行，这个配置好像只有在编辑器设置了 formatOnSave 才会生效
    insert_final_newline = true
    ```

**因为下面3个我们闭上眼睛都会安装，所以这里就不废话了，直接配置。**

## 二、ESLint

+ 当我们安装好了 ESLint 以后，ESLint就已经自动开启了。
+ VSCode 中的插件查找配置文件的顺序大概都一样，所以我就不废话了，况且，ESLint 一般每个项目规则都不同，所以每个项目都有单独的 .eslintrc 文件。
+ 我们可以在 .eslintrc.json 文件的 `rules` 项去自定义校验规则，更多配置，请去 [ESLint官网](https://eslint.bootcss.com/) 看看。



## 三、Vetur

+ 我们在开发Vue项目的时候，这个插件是我们最不应该缺少的了，它集成了 代码片段、代码高亮、格式化 等等。

+ 但是我们今天不扯别的，今天我们只关注 格式化。

+ Vetur 在格式化 .vue 文件的时候，把一个 完整的文件 拆分成 3 个部分：

  + template 部分 交给 html 格式化程序
  + script 部分 交给 js 格式化程序
  + style 部分 交给 css 格式化程序

+ 所以我们需要在 settings.json 中 设置 .vue 文件 交给 Vetur 去处理：

  ```json
  // settings.json
  {
      "[vue]": {
          "editor.defaultFormatter": "octref.vetur"
      }
  }
  ```

+ 因为 Vetur 默认使用 Prettier 进行代码格式化，所以接下来我们介绍 Prettier。



## 四、Prettier

+ 下面介绍几个 Prettier 的常用配置，更多配置，可以在群里讨论

  ```json
  {
      // 表示 箭头函数仅有一个形参时，要不要省略小括号，这里表示能省略就省略
      "prettier.arrowParens": "avoid",
      // 表示 是否使用 单引号，这里表示是
      "prettier.singleQuote": true,
      // 表示 代码结尾要不要加分号，这里表示不加
      "prettier.semi": false,
      // 表示 数组或对象 最后一个元素后面要不要加逗号，这里表示不加
      "prettier.trailingComma": "none"
  }
  ```

+ 上面我们只配了 Vue 文件的格式化，但是 js 文件的格式化我们并没有配置，所以：

  ```json
  {
      // 让 js、ts 都使用 Prettier 格式化
      "[javascript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[typescript]": {
          "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
  }
  ```

  



## 五、我的 VSCode 配置文件

```json
{
    // 主题
    "workbench.colorTheme": "Monokai",
    
    // 全局缩放大小
    "window.zoomLevel": 3,
    
    // 字体
    "editor.fontFamily": "Consolas, 'Courier New', 'Microsoft YaHei', monospace",
    
    // 设置在 保存的时候 自动格式化
    "editor.formatOnSave": true,
    
    // 自动换行
    "editor.wordWrap": "on",
    
    // 控制如何处理在受信任的工作区中打开不受信任的文件
    "security.workspace.trust.untrustedFiles": "open",
    
    // html 文件的 格式化程序
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    
    // vue 文件的 格式化程序
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    
    // jsonc 文件的 格式化程序（json 和 jsonc 的区别： jsonc 是 json + comment，表示 可以注释，但是 ESLint 规范中 json 文件不能有注释，所以想写注释就用 jsonc 文件）
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    
    // javascript 文件的 格式化程序
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    
    // typescript 文件的 格式化程序
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    
    // prettier 的一些配置（注意：prettier 也会去找当前目录下的 .prettierrc 文件，找不到就往上级找，在 settings.json 里面配置的一般都是默认配置，优先级最低）
    // 箭头函数要不要小括号， avoid 表示能不要就不要
    "prettier.arrowParens": "avoid",
    // 使用 单引号，true 表示是，false 表示否
    "prettier.singleQuote": true,
    // 结尾加分号，true 表示加，false 表示不加
    "prettier.semi": false,
    // 对象或数组最有一个元素后面要不要加 逗号， none 表示不加， es5 表示遵循 es5 规范， always 表示加
    "prettier.trailingComma": "none"
}

```





