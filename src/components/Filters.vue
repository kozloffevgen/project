<template>
  <div class="filters">
    <VSelect 
      v-for="(item, key) in $options.config" 
      :key="key"
      :palceholder="item"
      :items="setCurrSelectItems(item)"
      size="bg"
      @change="$emit('change', { key: item, value: $event })"
    />
  </div>
</template>

<script>
import VSelect from './common/VSelect.vue';

export default {
  name: 'Filters',
  config: [
    'HTTPS',
    'Cors',
    'Category',
  ],
  components: {
    VSelect,
  },
  props: {
    items: { type: Array },
  },
  methods: {
    setCurrSelectItems(name) {
      return [...new Set(this.items.map((item) => item[name]))];
    },
  },
};
</script>

<style lang="less" scoped>
.filters {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>