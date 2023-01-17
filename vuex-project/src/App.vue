<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="increment({ value: 1 })">Add 1</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    UserAuth,
    FavoriteValue,
  },
  methods: {
    // add() {
    // this.$store.commit('increment', { value: 1 });
    //   this.$store.dispatch('increment', { value: 1 });
    // },
    ...mapActions(['increment']),
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
