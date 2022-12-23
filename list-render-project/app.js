const app = Vue.createApp({
  data() {
    return {
      enteredGoal: "",
      goals: [] 
    };
  },
  methods: {
    insert() {
      this.goals.push(this.enteredGoal);
    }
  },
});

app.mount('#user-goals');
