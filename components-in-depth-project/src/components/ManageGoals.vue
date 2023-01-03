<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="isInvalidGoal">
        <h2>Invalid goal</h2>
        <p>Please enter a valid value</p>
        <button @click="close">Ok</button>
    </error-alert>
</template>

<script>
    import ErrorAlert from "./ErrorAlert.vue";

    export default {
        components: {
            ErrorAlert
        },
        data() {
            return {
                isInvalidGoal: false,
            }
        },
        methods: {
            setGoal() {
                if (this.$refs.goal.value === "") {
                    this.isInvalidGoal = true;
                }
            },
            close() {
                this.isInvalidGoal = false;
            }
        }
    }
</script>