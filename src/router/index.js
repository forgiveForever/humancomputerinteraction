import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../view/home/Home'
import {saveInfo} from "../view/util/saveInfo";

Vue.use(Router)



 const router= new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      meta: {
        label: '主页',
        requireAuth: true,//判断是否需要登录
      },
      component: Home,
      children:[
        {
          path: '/',
          name: '航班预订',
          meta: {
            label: '航班预订',
            requireAuth: true,//判断是否需要登录
          },
          component: () => import('../view/flight/fightBook'),
        },
        ]
    },
    {
      path: '/Login',
      name: '登录',
      meta: {
        label: '登录',
        requireAuth: false,//判断是否需要登录
      },
      component: ()=>import('../view/system/login'),
    },
    {
      path: '/home',
      name: '主页',
      meta: {
        label: '主页',
        requireAuth: true,//判断是否需要登录
      },
      component: Home,
      children:[
        {
          path: '/fightBook',
          name: '航班预订',
          meta: {
            label: '航班预订',
            requireAuth: true,//判断是否需要登录
          },
          component: () => import('../view/flight/fightBook'),
        },
        {
          path: '/flightQuery',
          name: '航班查询',
          meta: {
            label: '航班查询',
            requireAuth: true,//判断是否需要登录
          },
          component: () => import('../view/flight/flightQuery'),
        },
        {
          path: '/flightCreate',
          name: '机票生成',
          meta: {
            label: '机票生成',
            requireAuth: true,//判断是否需要登录
          },
          component: () => import('../view/flight/flightCreate'),
        }
        ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  /** 判断用户是否已经登录 */
  const  user= saveInfo.getUserName();
  var state= to.meta.requireAuth;
  if(state){
    if (user == null) {
      next("/Login");
    }else{ next()}

  }else { next()}

});
export default router;
