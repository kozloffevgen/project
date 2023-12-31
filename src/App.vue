<template>
  <VLoader v-if="isLoading" />
</template>

<script>
import { mapState, mapActions } from 'vuex';
import VLoader from './components/common/VLoader.vue';

export default {
  name: 'App',
  components: {
    VLoader,
  },
  computed: {
    ...mapState(['isLoading', 'data']),
  },
  methods: {
    ...mapActions(['getApis'])
  },
  created() {
    this.getApis();
  }
}
</script>
