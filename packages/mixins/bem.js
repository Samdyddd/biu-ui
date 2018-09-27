/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
/**
 *b() // 'biu-cell'  组件名
 *b('title') // biu-cell__title
 *b({disable}) // biu-cell biu-cell--disable
 *
 *b('title',{disable}) // biu-cell__title biu-cell--disable
 *b(['title', 'primary']) // biu-cell--disable biu-cell--primary
 *b({title, primary}) // 同上
 */


 const ELEMENT = '__';
 const MODS = '--';

 const join = (name, el, symbol) => el ? name+symbol+el :name

// 针对string, [], {} 处理
 const prefix = (name, mods) => {
   if (typeof modes === 'string') {
     return join(name, mods, MODS)
   }

   if (Array.isArray(mods)) {
     return mods.map(item => prefix(name, item))
   }

   const ret = {}
   Object.keys(mods).forEach(key => {
     ret[name + MODS + KEY] = mods[key];
   });
   return ret;
 }

 export default {
   methods: {
     b(el, mods) {
           //  name是组件的名称
       const {name} = this.$options;
       if (el && typeof el !=='string') {
         mods = el;
         el = '';
       }
       el = join(name, el ,ELEMENT);
       return mods ? [el, prefix(el, mods)] : el;
     }
   }
 }
