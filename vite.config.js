import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
// 按需引入elementPlus组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 自动导入Icon图标
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 配置'@'路径别名
    alias: {
      '@' : resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 和 Vue-router 相关函数，如 ref, reactive, createRouter 等
      imports: ['vue'],//, 'vue-router'
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
          // prefix: 'icon',
          // 指定collection，即指定为elementplus图标集ep
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver(),
      ],
    }),    
    // Icons图标自动下载
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),
  ],
})

