import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloRouter from '@/components/HelloRouter'
import User from '@/components/User'
import UserInfo from '@/components/UserInfo'
import Password from '@/components/Password'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HelloRouter',
      name: 'HelloRouter',
      component: HelloRouter
    },
    {
      //路由跳转携带值
      //关于路由有优先级问题
      //index越小 优先级越高
      path: '/user/:id/set/:time',
      name:'User',
      component: User 
    },
    {
    
      path: '/userInfo',
      name:'UserInfo',
      component: UserInfo,
      //要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。
      children:[{
        path:'password',
        name:'Password',
        component:Password
      },
      {
        path:'',
        component:Password
      }
    ]
    }
  
     
  ]
})
