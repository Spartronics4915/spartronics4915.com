<template>
    <footer class="f col evenly">
        <div>Copyright © 2026 Spartronics 4915, All rights reserved.</div>
        <div>Email us at Spartronics4915@gmail.com</div>
        <button class="small" @click="toggleTheme">Theme</button>
    </footer>
</template>

<style scoped>
    footer {
        margin-top: 1rem;
        border-top: 1px solid var(--main-font);
        padding: 2rem;
    }
</style>

<script>
    export default {
        props: {
            
        },
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        unmounted() {
            
        },
        methods: {
            toggleTheme() {
                useColorMode().preference = useColorMode().value === "light" ? "dark" : "light"
            },
        },
    }
</script>