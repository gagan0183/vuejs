function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackMonster() {
            this.monsterHealth = this.monsterHealth - getRandomValue(5, 12);
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth = this.playerHealth - getRandomValue(8, 15);
        }
    },
});

app.mount("#game");