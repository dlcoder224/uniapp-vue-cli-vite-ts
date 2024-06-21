<template>
  <up-tabbar
	:value="tabValue"
	:placeholder="false"
	:safeAreaInsetBottom="false"
	:border="false"
	:activeColor="activeColor"
	:inactiveColor="inactiveColor"
	@change="clickFn"
>
	<up-tabbar-item v-for="(item, index) of tabBarItems" :key="index" :text="item.text">
		<template #active-icon>
			<up-icon :name="item.icon" :color="activeColor" :size="iconSize"></up-icon>
		</template>
		<template #inactive-icon>
			<up-icon :name="item.icon" :color="inactiveColor" :size="iconSize"></up-icon>
		</template>
	</up-tabbar-item>
</up-tabbar>
</template>

<script lang="ts" setup>
// const props = defineProps({
//   tabValue: {
//     type: Number,
//     default: 0
//   }
// })

const tabValue = ref(0)
const activeColor = ref('#de868f')
const inactiveColor = ref('#cecece')
const iconSize = ref(40)
const tabBarItems = reactive([
	{ text: '首页', icon: 'bell-fill', path: '/pages/home/index' }, 
	{ text: '统计', icon: 'photo', path: '/pages/statistics/index' }, 
	{ text: '我的', icon: 'account', path: '/pages/mine/index' }
])

onShow(() => {
  const routes = getCurrentPages()
  const route = routes[routes.length - 1]?.__route__
  const index = tabBarItems.findIndex(item => {
    return item.path == `/${route}`
  })
  tabValue.value = index
})

const clickFn = (value: number) => {
  uni.switchTab({ url: tabBarItems[value].path })
}

</script>

<style lang="scss" scoped>
</style>