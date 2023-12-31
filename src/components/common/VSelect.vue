<template>
  <div class="v-select__wrap">
    <div :class="classes" @click="selectHandler">
      <div class="v-select__placeholder">
        {{ palceholder }}
      </div>

      <span v-if="activeItem" class="v-select__selected-item">
        {{ activeItem }}
      </span>

      <VSvg
        class="v-select__svg"
        :class="{'v-select__svg_open': isOpenSelectList}"
        name="arrow-down" 
      />
    </div>

    <div v-if="isOpenSelectList" class="v-select__list-options">
      <div
        v-for="(item, key) in items"
        :key="key"
        class="v-select__option"
        @click="changeOption"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import VSvg from './VSvg.vue';

export default {
  name: 'VSelect',
  components: {
    VSvg,
  },
  props: {
    size: { 
      type: String,
      default: 'sm',
      validator: (val) => ['sm', 'md', 'bg'].includes(val),
    },
    palceholder: { type: String },
    items: { type: Array },
  },
  data() {
    return {
      activeItem: null,
      isOpenSelectList: false,
    };
  },
  computed: {
    classes() {
      return [
        'v-select',
        `v-select_${this.size}`,
        {
          'v-select__active-item': this.activeItem,
        },
      ];
    },
  },
  methods: {
    selectHandler() {
      this.isOpenSelectList = !this.isOpenSelectList;
    },
    changeOption({ target }) {
      this.activeItem = target.innerText;
      this.selectHandler();

      this.$emit('change', this.activeItem);
    },
  },
};
</script>

<style lang="less" scoped>
.v-select {
  position: relative;
  display: flex;
  align-items: center;
  width: 150px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 10px 0;
  padding-inline: 10px 30px;
  cursor: pointer;

  &_md {
    width: 180px;
    height: 40px;
  }

  &_bg {
    width: 220px;
    height: 50px;
  }

  &__wrap {
    position: relative;
  }

  &__list-options {
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    max-height: 500px;
    overflow-y: auto;
  }

  &__active-item {
    .v-select__placeholder {
      top: -8px;
      font-size: 12px;
      padding: 0 4px;
      background-color: var(--color-bg-default);
      border-radius: var(--border-radius);
    }
  }

  &__option {
    padding: 8px 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-bg-grey);
    }
  }

  &__placeholder {
    position: absolute;
    top: 14px;
    font-size: 16px;
    color: var(--color-text-placeholder);
    transition: top .3s ease-out, background-color .5s ease-out;
  }

  &__selected-item {
    font-size: 16px;
  }

  &__svg {
    position: absolute;
    inset-inline-end: 12px;
    transition: transform .3s ease-out;

    &_open {
      transform: rotate(-180deg);
    }
  }
}
</style>