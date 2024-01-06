<template>
  <div class="positions-items">
    <div
      v-for="position in $store.state.visiblePositions"
      :key="position.id"
      class="positions-items__item"
    >
      <component
        :is="item.template"
        v-for="item in $options.columns"
        :key="item.name"
        :href="item.name === 'Link' ? position[item.name] : null"
        :title="position[item.name]"
        class="positions-items__item-row"
      >
        <span class="positions-items__item-name">{{ item.name }}</span>
        <span
          v-if="item.name !== 'Link'"
          class="positions-items__item-value"
        >
          : {{ position[item.name] }}
        </span>
      </component>
    </div>

    <v-intersection-observer
      v-if="$store.getters.isShowObserver"
      @appear="$store.commit('addNextChunk')"
    />
  </div>
</template>

<script>
import VIntersectionObserver from './common/VIntersectionObserver.vue';

export default {
  name: 'PositionsItems',
  components: {
    VIntersectionObserver,
  },
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
};
</script>

<style lang="less" scoped>
.positions-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  max-height: 72vh;
  overflow-y: auto;
  gap: 12px 2%;
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
    white-space: nowrap;
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
