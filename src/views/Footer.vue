<template>
    <footer className="footer">
        <div className="container">
            <p>{{ copyrightMessage }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
    computed: {
        copyrightMessage() {
            return `©${this.currentYear} Wachalo, All Rights Reserved.`;
        },
    },
};
</script>

<style scoped>
.footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}
</style>
