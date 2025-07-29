# 通用抽屉表单模板

## 模板简介

这是一个用于快速生成通用抽屉表单的 Vue 3 模板。基于 Yun Design 的 yun-drawer 和 yun-pro-form 组件结合使用，提供完整的抽屉表单功能。

## 功能特性

- ✅ Vue 3 Composition API
- ✅ Yun Design UI 组件库
- ✅ yun-pro-form 表单组件
- ✅ yun-drawer 抽屉组件
- ✅ useForm 组合式函数
- ✅ 表单项配置（useForm.jsx）

## 项目结构

```
├── index.vue              # 主组件文件
├── hooks/                 # 组合式函数目录
│   └── useForm.jsx        # 表单项配置
```

### 文件链接

- [🏠 主模板文件](./index.vue)
- [📝 表单项配置](./hooks/useForm.jsx)

## 使用指南

1. 将模板文件复制到项目中（如果文件名称已存在，则直接修改）
2. 配置表单项（[`useForm.jsx`](./hooks/useForm.jsx)）
3. 模板入口文件（[`index.vue`](./index.vue)）
4. 在需要的位置引用和调用 `open` 方法

## 注意事项

1. 应用模板时，先检查确保已安装 `yun-design`、`@ylz-material/pro-form`、`@ylz-material/drawer` 依赖
2. 除非用户明确要求定制，否则直接复制并使用模板目录下的文件内容 