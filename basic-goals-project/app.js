const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "<h1>Finish the course and learn vue.js</h1>",
            courseGoalB: "Master vue js",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount("#user-goal");