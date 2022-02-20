<template>
    <div>
        <router-link to="/">List Pokemons</router-link>
        <router-link to="/id">Pokemon</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>
<style scoped>
div{
    padding: 0 30px;
}

div a{
    font-weight: bold;
    color: rgb(14, 36, 10);
    margin: 0 10px;
}

div .router-link-exact-active{
    color:rgb(88, 47, 184);
}
</style>