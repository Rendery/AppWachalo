<template>
    <div>
        <h1>Iniciar sesión</h1>
        <div class="form-group">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-user"></i>
                </span>
                <InputText v-model="email" placeholder="Correo electrónico" />
            </div>
        </div>
        <div class="form-group">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-lock"></i>
                </span>
                <Password v-model="password" placeholder="Contraseña" />
            </div>
        </div>
        <div class="form-group">
            <Button label="Iniciar sesión" @click="login" />
        </div>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <div class="form-group" style="margin-top: 10px;">
            <router-link to="/forgot-password">¿Olvidó la contraseña?</router-link>
        </div>
        <div class="form-group" style="margin-top: 10px;">
            <router-link to="/register">¿Aún no tiene cuenta? Regístrese aquí. ¡Es gratis!</router-link>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Message from 'primevue/message';
import {RouterLink} from 'vue-router';

export default {
    name: 'Login',
    components: {
        InputText,
        Password,
        Button,
        Message,
        RouterLink,
    },
    setup() {
        const email = ref('');
        const password = ref('');
        const errorMessage = ref(null);
        const login = async () => {
            console.log(`Email: ${email.value} Password: ${password.value}`)
        }

        return {email, password, errorMessage, login};
    },
};
</script>

<style scoped>
@import "../primevue-styles.css";
.form-group {
    margin-bottom: 10px;
}
</style>
