<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    console.log(to, from);
    next();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
