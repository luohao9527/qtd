# Pro-Table 自动生成基础列表模板

## 项目简介

这是一个用于快速生成管理模块列表页面的 Vue 3 模板项目。基于 Element Plus 和 yun-pro-table 组件，提供完整的列表页面功能。

## 功能特性

- ✅ Vue 3 Composition API
- ✅ Element Plus UI 组件库
- ✅ yun-pro-table 表格组件
- ✅ 搜索表单自动生成
- ✅ 表格列配置
- ✅ 标签页切换
- ✅ 远程数据加载
- ✅ 分页功能
- ✅ 响应式布局

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
2. 修改 API 接口（替换 `customerPointsPage`）
3. 配置表格列（`useColumns.js`）
4. 配置搜索字段（`useSearch.js`）
5. 配置标签页（`useTabs.js`）

### 2. 表格列配置示例

```javascript
const tableColumns = computed(() => [
  {
    prop: 'id',
    label: 'ID',
    width: 80,
  },
  {
    prop: 'name',
    label: '名称',
    width: 120,
  },
  {
    prop: 'status',
    label: '状态',
    width: 100,
    render: (row) => row.status === 1 ? '启用' : '禁用'
  },
  {
    prop: 'operation',
    label: '操作',
    width: 150,
    render: (row) => [
      { text: '编辑', type: 'primary', onClick: () => handleEdit(row) },
      { text: '删除', type: 'danger', onClick: () => handleDelete(row) }
    ]
  }
]);
```

### 3. 搜索字段配置示例

```javascript
const searchFields = computed(() => [
  {
    field: 'name',
    label: '名称',
    type: 'input',
    placeholder: '请输入名称',
  },
  {
    field: 'status',
    label: '状态',
    type: 'select',
    options: [
      { label: '全部', value: '' },
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 },
    ],
  },
  {
    field: 'dateRange',
    label: '创建时间',
    type: 'daterange',
  }
]);
```

## 注意事项

1. 确保已安装 `@ylz-use/core`、`element-plus` 等依赖
2. API 函数返回的数据格式需符合 yun-pro-table 要求
