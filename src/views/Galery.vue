<template>
    <div class="galery">
        <Header/>
        <div class="filters">
            <h3>Categorias</h3>
            <Dropdown v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Selecciona una categoría" />
        </div>
        <div class="search">
            <InputText v-model="searchText" placeholder="Buscar por vendedor" />
        </div>
        <div class="grid">
            <Card v-for="item in filteredClothes" :key="item.id" class="grid-item">
                <template #header>
                    <div class="image-container">
                        <img :src="item.image" :alt="item.name" />
                    </div>
                </template>
                <template #content>
                    <p>{{ item.name }}</p>
                    <p>{{ getSellerName(item.sellers) }}</p>
                    <p>{{ getCategoryName(item.category) }}</p>
                </template>
                <template #footer>
                    <Button icon="pi pi-heart" severity="success" rounded aria-label="Favorite" />
                </template>
            </Card>
        </div>
        <Footer/>
    </div>
</template>

<script>
import axios from 'axios';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Button from "primevue/button";

import Footer from "./Footer.vue";
import Header from "./Header.vue"
export default {
    components: {
        Dropdown,
        InputText,
        Card,
        Button,
        Footer,
        Header,
    },
    data() {
        return {
            categories: [],
            sellers: [],
            clothes: [],
            selectedCategory: null,
            searchText: ''
        };
    },
    computed: {
        filteredClothes() {
            if (!this.clothes) {
                return [];
            }
            return this.clothes.filter((item) => {
                const seller = this.getSellerName(item.sellers).toLowerCase();
                const search = this.searchText.toLowerCase();
                return (!this.selectedCategory || item.category === this.selectedCategory.id) && (!search || seller.includes(search));
            });
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('/db.json');
                this.categories = response.data.categories;
                this.sellers = response.data.sellers;
                this.clothes = response.data.clothes;
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        },
        getSellerName(id) {
            const seller = this.sellers.find((s) => s.id === id);
            return seller ? seller.name : '';
        },
        getCategoryName(id) {
            const category = this.categories.find((c) => c.id === id);
            return category ? category.name : '';
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>

<style scoped>
.grid {
    display: grid;
    grid-gap: 10px;
}

.grid-item {
    margin-bottom: 20px;
    height: 300px;
}

.image-container {
    height: 200px;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.filters {
    margin-bottom: 10px;
    margin-top: 70px
}

.search {
    margin-bottom: 20px;
    text-align: right;
}

@media screen and (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    .grid-item {
        height: 400px;
    }
}

    @media screen and (min-width: 1024px) {
        .grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    }
</style>
