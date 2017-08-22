<template>
    <div>
      <ul>
        <router-link tag="li" class="tab-item" to="/recommend">推荐</router-link>
        <router-link tag="li" class="tab-item" to="/recommend">歌手</router-link>
        <router-link tag="li" class="tab-item" to="/recommend">排行</router-link>
        <router-link tag="li" class="tab-item" to="/recommend">搜索</router-link>
      </ul>
    </div>
</template>

<script>
  export default {}
</script>

<style scoped rel="stylesheet/scss">
  ul {
    .tab-item {
      display: inline-block;
    }
  }

</style>
