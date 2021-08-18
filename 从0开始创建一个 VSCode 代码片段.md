## 从 0 开始创建一个 VSCode 代码片段

### 一、整理思路和代码片段

假如我们现在要生成一个 Vue-Cli 中使用的 基本模板：

下面是我们想要生成的代码片段：

```vue
<template>
  <div class="$1">{{ msg }}$3</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello world",
    };
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style lang="$2" scoped></style>
```

上面代码片段里面的 $1/$2/$3，表示代码生成好以后，光标落在 $1 的位置，按 Tab 键光标会跳到 $2 的位置，再按 Tab 键光标会跳到 $3 的位置。。。

### 二、创建/编辑 VSCode 代码片段文件

1. 打开 VSCode
2. 点击 设置
3. 点击 用户代码片段
4. 点击 新建全局代码文件 或 选择一个现有代码片段进行编辑
5. 这时候 VSCode 就会打开一个 json 文件，我们编辑这个文件：

```jsonc
{
  // 这个对象的键，就是你的片段名字，你可以随便起
  "老子自己创建的Vue基础模板": {
    // prefix 表示 你输入什么字符 可以唤醒这个片段，支持字符串和数组，字符串用来设置单个，数组用来设置多个
    "prefix": ["mingge", "jiuge", "boge"],

    // scope 表示这个片段将来会在什么语言环境中生效，只支持字符串，多个语言用逗号（英文逗号）隔开
    "scope": "vue",
    // body 就是代码片段的内容体了，接收一个数组，数组中的每一个元素代表一行，空行用 空字符串 表示；
    // 一定要注意：在给模板加 双引号的时候，保持缩进，然后模板中的双引号要记得加反斜杠转义，然后模板中的 $1/$2... 在上面已经说过了
    "body": [
      "<template>",
      "    <div class=\"$1\">",
      "        {{ msg }}$3",
      "    </div>",
      "</template>",
      "",
      "<script>",
      "    export default {",
      "        data() {",
      "            return {",
      "                msg: 'Hello world'",
      "            }",
      "        },",
      "        created() {},",
      "        mounted() {},",
      "        computed: {},",
      "        watch: {},",
      "        methods: {}",
      "    }",
      "</script>",
      "",
      "<style lang=\"$2\" scoped>",
      "",
      "</style>"
    ],

    // 顾名思义：描述
    "description": ""
  }
}
```

6. 保存
7. 新建一个 对应语言的文件，输入上面的 prefix 中配置的指令试试。
