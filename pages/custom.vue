<script setup>
    definePageMeta({
        layout: 'custom',
        middleware: 'auth',
        // name: 'custom',
        // title: 'custom',
        // layoutTransition: {
        //     name: 'custom',
        //     mode: 'out-in',
        //     appear: true
        // },
        // transition: {
        //     name: 'custom',
        //     mode: 'out-in',
        //     appear: true
        // }
    });

    const { sayHello } = useUtils();
    sayHello();

    const { $sayHello } = useNuxtApp();
    $sayHello('Addo [sadojsa]');
</script>

<template>
    <div>
      
        <header>
         <nav>
            <ul>
              <li>
                <NuxtLink to="/">Home</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/events">events</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/events/profile">profile</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/app">app</NuxtLink>
              </li>
            </ul>
         </nav>
        </header>
    </div>
  </template>
  