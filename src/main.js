import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import Router from "./router";
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(Router).use(Antd).mount('#app')
