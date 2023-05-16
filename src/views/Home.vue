<template>
    <div class="home">
        <Header />
        <div class="banner">
            <h1>Intercambio de Ropa</h1>
            <p>Descubre y comparte ropa con personas de todo el mundo</p>
        </div>
        <div class="content">
            <ul>
                <li v-for="category in categories1" :key="category.id">
                    <h2>{{ category.name }}</h2>
                    <p>{{ category.description }}</p>
                </li>
            </ul>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue"

import axios from 'axios'
export default {
    name: "Home",
    components: {
        Footer,
        Header,
    },

    data() {
        return {
            categories1: [],
        };
    },
    async created() {
        try {
            const response = await fetch('/db.json');
            const data = await response.json();
            this.categories1 = data.categories1;
        } catch (error) {
            console.error(error);
        }
    },

};
</script>

<style scoped>
@import "../primevue-styles.css";
.home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.banner {
    background-color: lightgreen;
    padding: 50px 20px;
    text-align: center;
}

.banner h1 {
    color: darkblue;
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.banner p {
    color: darkblue;
    font-size: 1.2rem;
}

.content {
    flex: 1;
    padding: 20px;
}

@media (max-width: 600px) {
    .banner h1 {
        font-size: 1.8rem;
    }

    .banner p {
        font-size: 1rem;
    }
}
</style>
