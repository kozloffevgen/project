<template>
  <div class="positions">
    <div
      v-for="(position, key) in positions"
      :key="key"
      class="positions__item"
    >
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
      </component> 
    </div>

    <VIntersectionObserver v-if="isShowObserver" @appear="addNextChunk" />   
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import VIntersectionObserver from './common/VIntersectionObserver.vue';

export default {
  name: 'Positions',
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
  props: {
    positions: { type: Object, default: {} },
    isShow: { type: Boolean, default: false },
  },
  computed: {
    ...mapGetters(['isShowObserver']),
  },
    methods: {
    ...mapMutations(['addNextChunk']),
  },
};
</script>

<style lang="less" scoped>
.positions {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  max-height: 700px;
  overflow-y: auto;
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
