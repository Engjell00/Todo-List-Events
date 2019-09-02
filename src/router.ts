import Vue from 'vue';
import Router from 'vue-router';
import EventList from './views/EventList.vue';
import EventShow from './views/EventShow.vue';
import EventCreate from './views/EventCreate.vue';
import NotFound from './views/NotFound.vue'
import NetworkIssue from './views/NetworkIssue.vue'
import RegisterUser from './views/RegisterUser.vue'

// @ts-ignore
import Nprogress from 'nprogress'
import store from '@/store/store.ts'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: true
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom ,next){
        store
          .dispatch('event/fetchEvent', routeTo.params.id)
          .then((event) => {
            routeTo.params.event = event
            next()
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({
                name: '404',
                params: { resource: 'event' }
              })
            } else {
              next({ name: 'network-issue' })
            }
          })
      }
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate,
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '*',
      redirect:{name:'404', params: {resource: 'page'}}
    }
  ]
});

router.beforeEach((routeTo, routeFrom,next) =>{
  Nprogress.start()
  next()
})

router.afterEach(() => {
  Nprogress.done()
})

export default router
