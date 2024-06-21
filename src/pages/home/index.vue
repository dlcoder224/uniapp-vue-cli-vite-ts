<template>
  <view class="content">
    <Layout>
      222222222
    </Layout>
  </view>
</template>

<script setup lang="ts">
import Layout from "@/pages/components/layout/index.vue";

onShow(() => {
  userAccount()
})

// 用户登录生成唯一账号
const userAccount = () => {
  uni.login({
    provider: 'weixin',
      success: function(loginRes) {
        console.log(JSON.stringify(loginRes), 'loginRes')
        console.log(JSON.stringify(loginRes.code), 'loginRes--code')
      },
      fail: function(err) {
        uni.showToast({
          icon: 'none',
          title: err
        })
      }
  });
}

onShareAppMessage(() => {
  return {
    title: '限时注册有礼，充电低至0元起！',
    imageUrl: 'https://www.hqzn.cloud/Image/activity/handHolding/first-bg.png',
    // path: '/page_activity/pages/handHolding?inviteCode=' + encodeURIComponent(state.inviteCode)
  }
})
</script>

<style lang="scss" scoped>
</style>
