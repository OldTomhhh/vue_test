import VueRouter from "vue-router";
import Page1 from "../components/routerText/Page1.vue";
import Page2 from "../components/routerText/Page2.vue";
import Page3 from "../components/routerText/Page3.vue";
import Page4 from "../components/routerText/Page4.vue";

const router = new VueRouter({
    mode: 'history',
  routes: [
    {
      name:"Page1",
      path: "/Page1/:name",
      component: Page1,
    },
    { 
    name:"Page2",
      path: "/Page2",
      component: Page2,
    },
    {
      name:"Page3",
      path: "/Page3/:key",
      component: Page3,
    },
    {
      name:"Page4",
      path: "/Page4",
      component: Page4,
      beforeEnter:(to, from, next) => {
        alert("触发局部路由守卫")
        next()
        
        
      }
    },
  ],
});

export default router;
