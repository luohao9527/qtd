# 通用表格管理模板

## 模板简介

这是一个用于快速生成通用表格管理的 Vue 3 模板。基于 Yun Design 的 yun-pro-table 组件和 useProTable 结合使用，提供完整的列表页面功能。

## 功能特性

- ✅ Vue 3 Composition API
- ✅ Yun Design UI 组件库
- ✅ yun-pro-table 表格组件
- ✅ useProTable 组合式函数
- ✅ 表格列配置（useColumns.js）
- ✅ 搜索表单配置（useSearch.js）
- ✅ 标签页配置（useTabs.js）

## 项目结构

```
├── index.vue              # 主组件文件
├── hooks/                 # 组合式函数目录
│   ├── useColumns.js      # 表格列配置
│   ├── useSearch.js       # 搜索表单配置
│   └── useTabs.js         # 标签页配置
```

### 文件链接

- [🏠 主模板文件](./index.vue)
- [📊 表格列配置](./hooks/useColumns.js)
- [🔍 搜索表单配置](./hooks/useSearch.js)
- [🏷️ 标签页配置](./hooks/useTabs.js)

## 使用指南

1. 将模板文件复制到项目中（如果文件名称已存在，则直接修改）
2. 配置搜索字段（[`useSearch.js`](./hooks/useSearch.js)）
3. 配置标签页（[`useTabs.js`](./hooks/useTabs.js)）
4. 配置表格列（[`useColumns.js`](./hooks/useColumns.js)）
5. 模板入口文件（[`index.vue`](./index.vue)）

## 注意事项

1. 确保已安装 `yun-design`、`@ylz-use/core`、`@ylz-material/pro-table` 等依赖
2. API 函数返回的数据格式需符合 yun-pro-table 要求
3. 除非用户明确要求定制，否则直接使用模板目录下的文件内容
