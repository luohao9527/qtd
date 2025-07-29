import { ref, computed } from 'vue';

export default function useForm() {
  const formRef = ref();
  const formData = ref({});
  const formColumns = computed(() => [
    // 基本用法
    {
      label: '公司名称',
      prop: 'contractName',
      type: 'input',
      attrs: {
        placeholder: '请输入公司名称',
        maxlength: 10,
        showWordLimit: true,
      },
      tip: '这是一个帮助信息',
      colProps: { span: 24 },
      rules: [{ required: true, message: '请输入公司名称' }],
    },
    // 表单元素新增/移除示例
    {
      label: '兴趣',
      prop: 'hobby',
      min: 1,
      max: 5,
      buttonText: '新增兴趣项目',
      items: () => [
        {
          prop: 'name',
          label: '名称',
          render: (form, { root }) => <el-input v-model={form.name} v-slots={{ append: () => <span>啦啦啦</span> }} />,
          defaultValue: '篮球',
        },
      ],
    },
    // 嵌套层级示例 formData.companyInfo.companyName
    {
      label: '嵌套层级',
      prop: 'companyInfo',
      type: 'object',
      children: [
        {
          label: '公司名称',
          prop: 'companyName',
          type: 'input',
          attrs: {
            placeholder: '请输入公司名称',
          },
        },
      ],
      colProps: { span: 24 },
    },
    // 嵌套层级分组示例 formData.companyInfo.companyName
    {
      label: '嵌套层级分组',
      type: 'object',
      groups: [
        {
          label: '嵌套层级',
          hideLabel: true,
          prop: 'companyInfo',
          clean: true,
          type: 'object',
          children: [
            {
              label: '公司名称',
              prop: 'companyName',
              type: 'input',
              attrs: {
                placeholder: '请输入公司名称',
              },
            },
          ],
        },
      ],
      colProps: { span: 24 },
    },
  ]);

  return {
    formRef,
    formData,
    formColumns,
  };
}
