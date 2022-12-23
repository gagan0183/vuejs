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
    },
    remove(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
