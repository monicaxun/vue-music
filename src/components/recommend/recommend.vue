<template>
  <div class="recommend">
    <div>
      <slider>
        <div v-for="item in recommends">
          <a v-bind:href="item.linkUrl">
            <img v-bind:src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {ERR_OK} from 'api/config'
  import {getRecommend} from 'api/recommend'
  import Slider from 'base/slider/slider'
//  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        recommends: []
      }
    },
    created () {
      this._getRecommend()
    },
    methods: {
      _getRecommend () {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      }
    },
    components: {
      Slider: Slider
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "~common/scss/variables";
  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .recommend-list {
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        }
        .item {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
          .icon {
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-medium;
            .name {
              margin-bottom: 10px;
              color: $color-text;
            }
            .desc {
              color: $color-text-d;
            }
          }
        }
      }
      .loading-container {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    ul {
      li {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
