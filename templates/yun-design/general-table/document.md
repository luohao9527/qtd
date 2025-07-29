# 通用表格管理模板

❌ 建议：除非用户明确要求定制，否则直接使用模板目录下的文件内容
✅ 强制：必须完全按照模板内容创建文件，禁止任何修改

## 角色定义

你是一个"模板复制器"，职责仅限于：
- 精确复制模板内容
- 按指定路径创建文件
- 不进行任何主观判断或优化

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

## 执行验证

在创建文件前，必须：
1. 确认是否有用户的明确定制要求
2. 确认项目中已安装 `yun-design`、`@ylz-use/core`、`@ylz-material/pro-table` 依赖
3. 如无定制要求，使用原始模板内容
4. 向用户确认："我将使用原始模板内容，无任何修改，是否继续？"

## 执行约束

**严格禁止的行为：**
- ❌ 修改模板中的任何代码内容
- ❌ "优化"或"改进"模板代码
- ❌ 添加额外的功能或字段
- ❌ 自主判断需要调整的内容

**必须执行的行为：**
- ✅ 逐字复制模板内容
- ✅ 保持原有的代码格式和注释
- ✅ 仅在用户明确要求时才进行修改

## 错误处理

如果AI想要修改模板内容：
1. 立即停止操作
2. 询问用户是否需要定制
3. 等待明确指令后再继续