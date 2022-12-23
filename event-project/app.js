const app = Vue.createApp({
  data() {
    return {
      counter: 9,
      name: "",
      confirmName: ""
    };
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " last name";
    },
    resetInput() {
      this.name = "";
    },
    confirm() {
      this.confirmName = this.name;
    },
    submit() {
      alert("submit");
    },
    setName(event, lastName) {
      this.name = `${event.target.value} ${lastName}`;
    },
    increase(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
