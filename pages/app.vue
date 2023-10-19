<template>
  <div>
    <NuxtLayout>
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
        </ul>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
