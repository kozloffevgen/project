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
  <div class="filters-btns">
    <VButton value="Apply" @click="$emit('apply')" />
    <VButton value="Reset" @click="$emit('reset')" />
  </div>
</template>

<script>
import VButton from './common/VButton.vue';
import VSelect from './common/VSelect.vue';

export default {
  name: 'Filters',
  config: [
    'HTTPS',
    'Cors',
    'Category',
  ],
  components: {
    VButton,
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

.filters-btns {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px 0 20px;
}
</style>