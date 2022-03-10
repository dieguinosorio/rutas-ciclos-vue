const isAuthenticatedGuard = async (to,from,next) =>{
    console.log({to,from,next})
    return new Promise(resolve=>{
        const random = Math.random() * 100;
        if(random > 50){
            console.log('Autenticathed')
            next()
        }
        else{
            console.log('Bloqued for guarded')
            next({name:'pokemon-home'})
        }
    })
}

export default isAuthenticatedGuard