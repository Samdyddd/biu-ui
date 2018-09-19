import cretaeBasic from './create-basic'
import createBasic from './create-basic';


export default function(sfc) {
  // 添加组件
  sfc.components = Object.assign(sfc.components|| {}, {})
  return createBasic(sfc)
}