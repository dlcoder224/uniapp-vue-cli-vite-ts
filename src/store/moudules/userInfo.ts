import { defineStore } from 'pinia';
 

export const useUserInfoStore = defineStore(
  'useUserInfoStore',
  () => {
    const someState = ref('你好 pinia')
    return { 
      someState,
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