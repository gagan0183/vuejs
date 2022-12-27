const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const data = {
  message: "message",
  longMessage: "long message"
};

const proxy = new Proxy(data, {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " this is long message";
    }
  }
});

proxy.message = "here";

console.log(proxy.longMessage);

