<template>
  <yun-drawer
    v-model="visible"
    :title="title"
    size="large"
    confirm-button-text="确定"
    cancel-button-text="取消"
    destroy-on-close
    @confirm="handleConfirm"
  >
    <yun-pro-form
      ref="formRef"
      v-model:form="formData"
      :columns="formColumns"
      :config="{ grid: true, colProps: { span: 24 }, rowProps: { gutter: 12 } }"
      :form-props="{ labelPosition: 'top' }"
      :extra="{ type: 'add' }"
    />
  </yun-drawer>
</template>

<script setup>
import { ref, computed } from 'vue';
import useForm from './hooks/useForm';

const record = ref({});
const visible = ref(false);
const { formRef, formData, formColumns } = useForm();

const isPersisted = computed(() => record.value?.id);
const title = computed(() => (isPersisted.value ? '编辑' : '新增'));

const open = (row) => {
  record.value = row || {};
  visible.value = true;
};

const handleConfirm = ($done, $loading) => {
  try {
    $loading.value = true;
    setTimeout(() => {
      $done();
    }, 500);
  } catch (error) {
    console.error(error);
  } finally {
    $loading.value = false;
  }
};

defineExpose({
  open,
});
</script>
