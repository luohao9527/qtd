import { ref, computed } from 'vue'

export default () => {
  const tableData = ref([]);
  const tableColumns = computed(() => []);

  return {
    tableColumns,
    tableData
  };
};