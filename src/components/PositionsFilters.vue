<template>
  <div class="positions-filters">
    <v-select
      v-for="(item, key) in $options.config"
      ref="select"
      :key="key"
      :palceholder="item"
      :items="setCurrSelectItems(item)"
      size="bg"
      @change="$store.commit('setFilters', { key: item, value: $event })"
      @remove-item="$store.commit('resetFilters', { key: item })"
    />
  </div>

  <div class="filters-btns">
    <v-button
      value="Apply"
      @click="$store.commit('setFilteredItems')"
    />
    <v-button
      value="Reset"
      @click="removeFilters"
    />
  </div>
</template>

<script>
import VButton from './common/VButton.vue';
import VSelect from './common/VSelect.vue';

export default {
  name: 'PositionsFilters',
  config: ['HTTPS', 'Cors', 'Category'],
  components: {
    VButton,
    VSelect,
  },
  props: {
    items: { type: Array, default: () => [] },
  },
  methods: {
    setCurrSelectItems(name) {
      return [...new Set(this.items.map((item) => item[name]))];
    },
    removeFilters() {
      this.$refs.select.forEach((select) => {
        select.activeItem = null;
      });

      this.$store.commit('resetFilters');
    },
  },
};
</script>

<style lang="less" scoped>
.positions-filters {
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
