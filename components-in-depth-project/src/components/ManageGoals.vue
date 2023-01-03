<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <Teleport to="body">
        <error-alert v-if="isInvalidGoal">
            <h2>Invalid goal</h2>
            <p>Please enter a valid value</p>
            <button @click="close">Ok</button>
        </error-alert>
    </Teleport>
</template>

<script>
    import { Teleport } from "vue";
import ErrorAlert from "./ErrorAlert.vue";

    export default {
        components: {
    ErrorAlert,
    Teleport
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