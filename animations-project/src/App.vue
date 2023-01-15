<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogIsVisible: false,
      animated: false,
      paragraphsIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    beforeLeave(el) {
      console.log('beforeLeave');
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    enterCancelled(el) {
      console.log('enterCancelled');
      console.log(el);
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    afterEnter(el) {
      console.log('afterEnter');
      console.log(el);
    },
    afterLeave(el) {
      console.log('afterLeave');
      console.log(el);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraphs() {
      this.paragraphsIsVisible = !this.paragraphsIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animate() {
      this.animated = true;
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-190px); */
  animation: slide-out 0.3s ease-out forwards;
}

.route-enter-from {
}

.route-enter-active {
  animation: slide-out 0.3s ease-out;
}

.route-enter-to {
}

.route-leave-active {
  animation: slide-out 0.3s ease-in;
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
}

.button-enter-active {
  transition: opacity 0.3s ease-out;
}

.button-leave-active {
  transition: opacity 0.3s ease-in;
}

.button-enter-to,
.button-leave-from {
  opacity: 1;
}

@keyframes slide-out {
  0% {
    transform: translateX(0) scale(1);
  }
  63% {
    transform: translateX(-90px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
