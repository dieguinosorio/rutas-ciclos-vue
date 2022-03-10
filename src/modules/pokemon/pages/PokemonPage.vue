<template>
    <h1>Pokemon : <span>#{{id}}</span></h1>
    <div class="pokemon" v-if="pokemon">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
</template>
<script>
export default {
    props:{
        id:{
            type:Number,
            required:true
        }
    },

    data() {
        return {
            pokemon:null
        }
    },
    created(){
        /*const { id } = this.$route.params
        const { query } = this.$route
        this.query = query*/
        this.getPokemon()
    },

    methods: {
        async getPokemon(){
            try{
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json())
                this.pokemon = pokemon
            }
            catch(error){
                this.$router.push('/')
                console.log('No hay nada para mostrar')
            }
        }
    },

    watch:{
        id(){
            this.getPokemon()
        }
    }
}
</script>