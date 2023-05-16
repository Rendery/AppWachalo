<template>
    <div class="contacts">
        <Header />
        <img :src="creator.image" alt="Imagen del creador" class="creator-image" />
        <h2>{{ creator.name }}</h2>
        <p>{{ creator.description }}</p>
        <div class="contact-box">
            <h3>Contacto</h3>
            <p v-if="creator.contact">Tel: {{ creator.contact.phone }}</p>
            <p v-if="creator.contact">Correo: {{ creator.contact.email }}</p>
            <div class="social-links" v-if="creator.contact">
                <a :href="creator.contact.social.facebook" target="_blank">
                    <i class="pi pi-facebook"></i>
                </a>
                <a :href="creator.contact.social.twitter" target="_blank">
                    <i class="pi pi-twitter"></i>
                </a>
                <a :href="creator.contact.social.linkedin" target="_blank">
                    <i class="pi pi-linkedin"></i>
                </a>
            </div>
            <p>Gracias por visitar la página.</p>
        </div>
        <Footer />
    </div>
</template>


<script>
import axios from 'axios';
import Footer from "./Footer.vue";
import Header from "./Header.vue"
export default {
    name: "Contacts",
    components: {
        Footer,
        Header,
    },
    data() {
        return {
            creator: {}
        };
    },
    async created() {
        try {
            const response = await axios.get('/db.json');
            this.creator = response.data.creator;
        } catch (error) {
            console.error('Error al cargar la información del creador:', error);
        }
    }
};
</script>

<style scoped>
.contacts {
    display: flex;
    margin-top: 60px;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

.creator-image {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
    margin-bottom: 25px;
    text-align: justify-all;
}
.contact-box {
    background-color: #8b8bff;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    margin-top: 2rem;
    width: 500px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.social-links a {
    color: white;
    font-size: 1.5rem;
}
</style>
