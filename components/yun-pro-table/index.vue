<template>
  <div class="page-container">
    <div class="page-container__header">
      <el-tabs
        v-model="tabName"
        class="demo-tabs"
      >
        <el-tab-pane
          v-for="item in tabOptions"
          :key="item.value"
          :label="item.label"
          :name="item.value"
        />
      </el-tabs>
    </div>
    
    <div class="page-container__content">
      <yun-pro-table
        ref="proTableRef"
        v-model:tableData="tableData"
        v-model:pagination="pagination"
        v-model:searchData="searchData"
        v-model:filter-data="filterTableData"
        :search-fields="searchFields"
        :table-columns="tableColumns"
        :remote-method="remoteMethod"
        :table-props="{
          ...tableProps,
          tableHeaderKey: `${$route.path}-list`,
        }"
        auto-height
        reset-fetch
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProTable } from '@ylz-use/core';
import useTabs from './hooks/useTabs';
import useSearch from './hooks/useSearch';
import useColumns from './hooks/useColumns';

// pro table
const {
  pagination,
  remoteMethod,
  tableProps,
  proTableRef,
  filterTableData,
  reLoad,
} = useProTable({
  apiFn: () => {},
  paramsHandler(data) {
    const params = {
      ...data,
      current: pagination.value.page,
      size: pagination.value.size,
      orders: [
        {
          column: 'create_time',
          asc: false,
        },
      ],
    };
    return params;
  },
});

// hooks
const { tabName, tabOptions } = useTabs();
const { searchData, searchFields } = useSearch();
const { tableData, tableColumns } = useColumns();
</script>

<style lang="scss" scoped>
.page-container {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  &__header {
    flex-shrink: 0;
    padding: 0 20px;
  }
  &__content {
    height: 0;
    flex-grow: 1;
    overflow: hidden;
  }
}
</style>