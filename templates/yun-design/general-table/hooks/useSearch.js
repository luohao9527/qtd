import { ref, computed } from 'vue';

export default () => {
  const searchData = ref({});
  const searchFields = computed(() => []);

  return {
    searchData,
    searchFields
  };
};