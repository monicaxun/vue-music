<template>
  <ul class="tab">
    <router-link tag="li" class="tab-item" to="/recommend">推荐</router-link>
    <router-link tag="li" class="tab-item" to="/singer">歌手</router-link>
    <router-link tag="li" class="tab-item" to="/rank">排行</router-link>
    <router-link tag="li" class="tab-item" to="/search">搜索</router-link>
  </ul>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~common/scss/variables";
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;
    .tab-item {
      flex: 1;
      text-align: center;
      color: $color-text;

      &.router-link-active {
        color: $color-theme;
        border-bottom: $color-theme 2px solid;
      }
    }
  }

</style>
