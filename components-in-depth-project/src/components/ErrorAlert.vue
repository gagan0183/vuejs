<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style scoped>
    dialog {
        margin: 0;
        position: fixed;
        top: 20vh;
        left: 30%;
        width: 40%;
        box-shadow: 0 2px 6px 0px rgba(0,0,0,9.0);
        background-color: white;
        padding: 1rem;
    }
</style>