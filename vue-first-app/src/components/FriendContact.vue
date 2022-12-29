<template>
    <li>
        <h2>{{ friend.name }} {{ isFavorite ? "(Favorite)": "" }}</h2>
        <button @click="toggleFriend">Toogle favorite</button>
        <button @click="toggle">{{ isdetailAreVisible ? 'Hide' : 'Show' }} details</button>
        <ul v-if="isdetailAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li> 
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
    export default {
        props: {
            friend: {
                type: Object,
                required: true
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        emits: {
            'toggle-favorite': function(id) {
                if (id) {
                    return true;
                } else {
                    console.warn('Id is missing');
                    return false;
                }
            },
            'delete': function(id) {
                if (id) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        data() {
            return {
                isdetailAreVisible: false,
            }
        },
        methods: {
            toggle() {
                this.isdetailAreVisible = !this.isdetailAreVisible;
            },
            toggleFriend() {
                this.$emit('toggle-favorite', this.friend.id);
            },
            deleteFriend() {
                this.$emit('delete', this.friend.id);
            }
        }
    };
</script>