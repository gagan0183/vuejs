const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn vue.js",
            vueLink: "https://vuejs.org"
        };
    }
});

app.mount("#user-goal");