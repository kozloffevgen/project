<template>
  <div class="positions">
    <div
      v-for="(position, key) in positions"
      :key="key"
      class="positions__item"
    >
      <span class="positions__item-name">Id: {{ key + 1 }}</span>

      <component
        v-for="item in $options.columns"
        :key="item.name"
        :is="item.template"
        :href="item.name === 'Link' ? position[item.name] : null"
        :title="position[item.name]"
        class="positions__item-row"
      >
        <span class="positions__item-name">{{ item.name }}</span>
        <span v-if="item.name !== 'Link'" class="positions__item-value">: {{ position[item.name] }}</span>
        <span v-if="!position[item.name]" class="positions__item-value_empty">: None</span>
    </component> 
      </div>
  </div>
</template>

<script>
export default {
  name: 'Positions',
  columns: [
    {
      name: 'API',
      template: 'span',
    },
    {
      name: 'Description',
      template: 'span',
    },
    {
      name: 'Auth',
      template: 'span',
    },
    {
      name: 'HTTPS',
      template: 'span',
    },
    {
      name: 'Cors',
      template: 'span',
    },
    {
      name: 'Link',
      template: 'a',
    },
    {
      name: 'Category',
      template: 'span',
    },
  ],
  props: {
    positions: { type: Object, default: {} }
  },
};
</script>

<style lang="less" scoped>
.positions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px 1%;
  margin: 20px 0;

  &__item {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 32%;
    padding: 8px;
    border: 2px solid var(--border-color);
    border-radius: var(--border-radius);
  }

  &__item-row {
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  &__item-name {
    font-weight: 700;
  }

  &__item-value {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
