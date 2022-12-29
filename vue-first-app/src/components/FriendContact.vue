<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggle">Show details</button>
        <ul v-if="isdetailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li> 
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        data() {
            return {
                isdetailsAreVisible: false,
                friend: {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "01243 45678 90",
                    email: "manuel@localhost.com"
                }   
            }
        },
        methods: {
            toggle() {
                this.isdetailsAreVisible = !this.isdetailsAreVisible;
            }
        }
    };
</script>