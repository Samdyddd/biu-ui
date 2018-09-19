import Cell from './cell'
import CountDown from './count-down'

const version = '1.0.0'
const components = [
  Cell,
  CountDown
]

const install = Vue => {
  components.forEach(component => {
    Vue.use(component);
  })
}

if (typeof window !=='undefined' && window.Vue) {
  install(window.Vue)
}

// 按需加载
export {
  install,
  version,
  Cell,
  CountDown
}

// install 全部加载
export default {
  install,
  version
}