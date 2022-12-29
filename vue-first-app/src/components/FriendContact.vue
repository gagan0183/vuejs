<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggle">{{ isdetailAreVisible ? 'Hide' : 'Show' }} details</button>
        <ul v-if="isdetailAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li> 
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        data() {
            return {
                isdetailAreVisible: false,
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
                this.isdetailAreVisible = !this.isdetailAreVisible;
            }
        }
    };
</script>