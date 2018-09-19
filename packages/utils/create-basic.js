import bem from '../mixins/bem'

const install = function(Vue) {
  Vue.component(this.name, this);
}

export default function(sfc) {
  // 组件名
  sfc.name = 'biu-' + sfc.name
  // vue插件的公开方法install,第一个参数是vue构造器，第二个是可选选择对象，插件的安装
  sfc.install = sfc.install || install
  // 混合方法
  sfc.minxins = sfc.mixins || []
  // 添加bem 方法
  sfc.push(bem)
  // 方法 
  sfc.methods = sfc.methods || {}
  // 每个组件携带isDef 
  // sfc.methods.isDef = isDef

  return sfc;

}