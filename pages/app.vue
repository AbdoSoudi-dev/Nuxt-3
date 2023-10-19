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
              <NuxtLink to="/custom">Custom</NuxtLink>
            </li>
          </ul>
       </nav>
      </header>
  </div>
</template>
