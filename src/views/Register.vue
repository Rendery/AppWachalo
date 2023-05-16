<template>
    <div>
        <h1>Registrarse</h1>
        <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-user"></i>
      </span>
            <InputText v-model="name" placeholder="Nombre" />
        </div>
        <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-envelope"></i>
      </span>
            <InputText v-model="email" placeholder="Correo" />
        </div>
        <div class="p-inputgroup">
      <span class="p-inputgroup-addon">
        <i class="pi pi-lock"></i>
      </span>
            <Password v-model="password" placeholder="Contraseña" />
        </div>
        <Button label="Registrarse" @click="register" />
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <div class="p-field">
            <router-link to="/login">¿Ya tienes una cuenta? Inicia sesión</router-link>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

export default {
    name: 'Register',
    components: {
        InputText,
        Password,
        Button
    },
    setup() {
        const name = ref('')
        const email = ref('')
        const password = ref('')
        const errorMessage = ref(null)

        const register = async () => {
            try {
                const { user } = await projectAuth.createUserWithEmailAndPassword(
                    email.value,
                    password.value
                )
                await createUserProfileDocument(user, { name: name.value })
            } catch (error) {
                errorMessage.value = error.message
            }
        }

        return { name, email, password, errorMessage, register }
    }
}
</script>

<style scoped>
@import "../primevue-styles.css";
.p-field {
    margin: 10px 0;
}
.p-inputgroup {
    margin: 10px 0;
}
</style>
