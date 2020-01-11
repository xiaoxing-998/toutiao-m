module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 设计稿 375:37.5
      // 设计稿：750:75  但是会和vant出现冲突 使用时/2
      // Vant 是基于 375 开发
      rootValue: 37.5, // （Number）根元素字体大小。
      propList: ['*']// （数组）可以从px更改为rem的属性。 使用通配符*启用所有属性
    }
  }
}
