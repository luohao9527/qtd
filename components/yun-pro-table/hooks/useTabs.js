import { ref } from 'vue';

export default () => {
  const tabName = ref('points');
  const tabOptions = ref([
    {
      label: '积分发放',
      value: 'points',
    },
    {
      label: '积分明细',
      value: 'pointsDetail',
    },
    {
      label: '积分规则',
      value: 'pointsRule',
    }
  ]);

  return {
    tabName,
    tabOptions,
  };
}