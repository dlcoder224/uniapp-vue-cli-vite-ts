import { defineStore } from 'pinia';
 

export const useUserInfoStore = defineStore(
  'useUserInfoStore',
  () => {
    const userInfo = ref({
      name: '张三',
      token: ''
    })

    // 更新用户信息
    const updateUserInfo = (newUserInfo: any) => {
      userInfo.value = newUserInfo
    }
    
    return { 
      userInfo,
      updateUserInfo
    }
  },
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key, value) {
          uni.setStorageSync(key, value) 
        },
        getItem(key) {
          return uni.getStorageSync(key) 
        },
      },
    },
  },
);