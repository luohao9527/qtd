# Pro-Table 自动生成基础列表模板

## 模板简介

这是一个用于快速生成管理模块列表页面的 Vue 3 模板。基于 Yun Design 的 yun-pro-table 组件和 useProTable 结合使用，提供完整的列表页面功能。

## 功能特性

- ✅ Vue 3 Composition API
- ✅ Yun Design UI 组件库
- ✅ yun-pro-table 表格组件
- ✅ 表格列配置
- ✅ 搜索表单配置
- ✅ 标签页配置

## 项目结构

```
├── index.vue              # 主组件文件
├── hooks/                 # 组合式函数目录
│   ├── useColumns.js      # 表格列配置
│   ├── useSearch.js       # 搜索表单配置
│   └── useTabs.js         # 标签页配置
└── generate-pro-table.md  # 项目文档
```

## 使用指南

### 1. 快速开始

1. 复制模板文件到你的项目
2. 模板入口文件（`index.vue`）
3. 配置表格列（`useColumns.js`）
4. 配置搜索字段（`useSearch.js`）
5. 配置标签页（`useTabs.js`）

## 注意事项

1. 确保已安装 `yun-design`、`@ylz-use/core`、`@ylz-material/pro-table` 等依赖
2. API 函数返回的数据格式需符合 yun-pro-table 要求
