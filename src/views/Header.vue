<template>
    <header class="header">
        <div class="logo-container">
            <img class="logo" src="../components/icons/logo.png" alt="Wachalo_Logo" />
            <h1>Wachalo</h1>
        </div>
        <nav class="nav">
            <ul>
                <li><a href="/Login">Ingresar</a></li>
                <li><a href="/Contacts">Contacto</a></li>
                <li><a href="/Galery">Sobre Nosotros</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: darkblue;
    color: white;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nav li {
    margin-left: 20px;
}

.nav a {
    color: white;
    text-decoration: none;
}

.nav a:hover {
    text-decoration: underline;
}
</style>
