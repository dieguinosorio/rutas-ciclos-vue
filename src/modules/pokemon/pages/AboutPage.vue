<template>
    <h1>About Page</h1>
    <hr>
    <h1>{{name}}</h1>
    <button @click="onChangedName">Changed Name</button>
</template>
<script>
export default {
    data() {
        return {
            name:'Diego Osorio'
        }
    },
    methods: {
        onChangedName(){
            console.log('la propiedad name cambiara')
            this.name ="Luisa Montoya"
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
        //Peticiones HTTP
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted(){
        console.log('unmounted')
    },
    errorCaptured(){
        console.log('errorCaptured')
    },
    renderTracked(){
        console.log('renderTracked')
    },
    renderTriggered(){
        console.log('renderTriggered')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    serverPrefetch(){
        console.log('serverPrefetch')
    }
}
</script>