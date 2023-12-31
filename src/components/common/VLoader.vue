<template>
  <div class="v-loader">
    <div class="v-loader__inner v-loader__inner_first"></div>
    <div class="v-loader__inner v-loader__inner_second"></div>
    <div class="v-loader__inner v-loader__inner_third"></div>
  </div>
</template>

<script>
  export default {
    name: 'VLoader',
  };
</script>

<style lang="less" scoped>
.v-loader {
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  width: 64px;
  height: 64px;
  border-radius: 50%;
  perspective: 800px;

  &__inner {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    
    &_first {
      left: 0%;
      top: 0%;
      animation: rotate-one 1s linear infinite;
      border-bottom: 3px solid var(--border-color-red);
    }

    &_second {
      right: 0%;
      top: 0%;
      animation: rotate-two 1s linear infinite;
      border-right: 3px solid var(--border-color-red);
    }

    &_third {
      right: 0%;
      bottom: 0%;
      animation: rotate-three 1s linear infinite;
      border-top: 3px solid var(--border-color-red);
    }
  }
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>