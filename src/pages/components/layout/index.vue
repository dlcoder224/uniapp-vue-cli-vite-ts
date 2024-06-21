<template>
  <view class="content">
    <view class="flex-1">
      <slot />
    </view>
    <TabBar class="w-100"/>
  </view>
</template>

<script setup lang="ts">
import TabBar from "@/pages/components/tabBar/index.vue";

onMounted(() => { 
})

</script>

<style lang="scss" scoped>
.content {
  background-color: #f8f8f8;
  width: 100vw;
  height: 100vh;
  .flex-1 {
    width: 100%;
    height: calc(100% - 100rpx);
    overflow: hidden;
  }
}
</style>
