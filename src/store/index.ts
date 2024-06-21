// store/index.ts
// 仓库大仓库
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 引入模块仓库
import { useUserInfoStore } from './moudules/userInfo'

// 创建大仓库
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export {
  pinia,
  useUserInfoStore
}
