import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotValid from './components/nav/NotValid.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      meta: {
        needsAuth: true,
      },
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from, next);
        next();
      },
    },
    {
      path: '/:NotValid(.*)',
      component: NotValid,
    },
  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global foreach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs authentications');
  }
  next(); // allow
  // next(false); // cancel the navigation
  // next('/users') // pass route
  // next({ name: 'team-members', id: 't2' }) // pass name route
});

router.afterEach(function (to, from) {
  // send analytics
  console.log('Global aftereach');
  console.log(to, from);
});

const app = createApp(App);

app.use(router);

app.mount('#app');
