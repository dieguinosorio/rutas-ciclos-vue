<template>
    <div>
        <!--<router-link :to="{name:'home'}">List Pokemons</router-link>
        <router-link :to="{name:'pokemon-id',params:{id:12}}">Pokemon</router-link>
        <router-link :to="{name:'about'}">About</router-link>-->
        <custom-link v-for="link in links" :key="link.to" :link="link"/>
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        CustomLink:defineAsyncComponent(()=> import('./CustomLink.vue'))
    },

    data() {
        return {
            links:[
                {to:'',name:'Pokemons'},
                {to:'pokemon-id', name:'Pokemon id', id:12},
                {to:'pokemon-about',name:'About'},
                {to:'dbz-characters',name:'Personajes'},
                {to:'dbz-about',name:'Dbz - About'},
                {to:'https://google.com',name:'google'},
            ]
        }
    },
}
</script>
<style scoped>

div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

/* a.router-link-exact-active {
    color: #42b983;
} */

</style>