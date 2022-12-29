<template>
    <li>
        <h2>{{ name }}</h2>
        <button @click="toggle">{{ isdetailAreVisible ? 'Hide' : 'Show' }} details</button>
        <ul v-if="isdetailAreVisible">
            <li><strong>Phone:</strong>{{ phone }}</li> 
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: ['name', 'phone', 'emailAddress'],
        data() {
            return {
                isdetailAreVisible: false,
            }
        },
        methods: {
            toggle() {
                this.isdetailAreVisible = !this.isdetailAreVisible;
            }
        }
    };
</script>