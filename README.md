# vuejs-start

> vue2 从头再来

## vue2文档

- 官方RC文档

> http://rc.vuejs.org

- 中文文档

>  http://vuefe.cn (逐步更新...)

## vue2 启航注意点
 
> https://github.com/dingyiming/vuejs-start/issues/10

## webpack2

- 入坑注意 https://github.com/dingyiming/vue2-start/issues/9

- 最新webpack2 && babel 实现tree shaking demo  https://github.com/dingyiming/vue2-start/issues/12

### 涉及技术栈

- vue2
- webpack2 && tree shaking
- axios
- vue-router@next
- vuex@next
- normalize.css
- ssr
- stream render
- express

## vue2起手式
 
> 逐步搭建vue2全家桶 // 先逐步进展，较完善后进行详细解说

### vue2 && vue-router@next
- [x] npm i vue-cli -g
- [x] vue init webpack-simple-2.0 vuejs-start
- [x] cd vuejs-start && npm install
- [x] npm run dev  (http://localhost:8080)
- [x] npm i vue-router@next

### 做个简单的注册登录页面

> https://github.com/dingyiming/demo-vue-sign/tree/vue2.x
> http://demo-vue-sign.dingyiming.cn/

- [x] 目标界面
- [x] 拆分组件
- [ ] 做点纯组件
- [ ] 赋予组件不同样式的能力
- [ ] 尝试两套样式
- [ ] 可以切换主题啦
- [ ] 简单完结小示例 -> 仓库链接
- [ ] 深化，直接写样式，点击生成，完成样式（待考虑）


## 规范

- ESLint Airbnb ES6 base

- 尽量写上注释

## Vue 生命周期

![](http://rc.vuejs.org/images/lifecycle.png)