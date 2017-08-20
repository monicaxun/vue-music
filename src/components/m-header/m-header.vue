<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Crazy Music</h1>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~common/scss/variables";
  @import "~common/scss/mixins";
  .m-header {
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;

    .icon {
      display: inline-block;
      width: 30px;
      height: 32px;
      margin-right: 10px;
      vertical-align: top;
      @include bg-image("logo");
      background-size: 30px 32px;
    }

    .text {
      display: inline-block;
      line-height: 44px;
      font-size: $font-size-large;
      vertical-align: top;
    }
  }
</style>
