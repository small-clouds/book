
// /import { Home } from './report-school.html';

const Foo = { template: '#foo-template' }
const Bar = { template: '#bar-template' }
const User = {
    template: '<div>User {{ $route.params.id }}</div>'
  }
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo, }, // 点击的时候并不重新加载模版
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
// const router = new VueRouter({
//     routes: [
//       // 动态路径参数 以冒号开头
//       { path: '/user/:id', component: User }
//     ]
//   })
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// const User = {
//     template: `
//       <div class="user">
//         <h2>User {{ $route.params.id }}</h2>
//         <router-view></router-view>
//       </div>
//     `
//   }