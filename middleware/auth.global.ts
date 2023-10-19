export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to);
    console.log(from);

    const isLoggedIn  = false;
    if (isLoggedIn) {
        return  navigateTo(to.fullPath);
    }
    
    return  navigateTo('/login');
    // const user = useSupabaseUser()
    // if (!user.value) {
    //     return navigateTo('/login')
    // }
    // return true

    // skip middleware on server
//   if (process.server) return
//   // skip middleware on client side entirely
//   if (process.client) return
//   // or only skip middleware on initial client load
//   const nuxtApp = useNuxtApp()
//   if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

// export default defineNuxtPlugin(() => {
//     addRouteMiddleware('global-test', () => {
//       console.log('this global middleware was added in a plugin and will be run on every route change')
//     }, { global: true })
  
//     addRouteMiddleware('named-test', () => {
//       console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
//     })
//   })

})