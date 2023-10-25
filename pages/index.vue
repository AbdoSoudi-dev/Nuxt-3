<script setup lang="ts">
    // const data : Object =  await $fetch('/api/hello');
    // console.log(data);
    
    // const { data: sayHello } = await useFetch('/api/hello');
    const data = useLazyFetch('/api/hello', {
        onRequest: (context) => {
            // console.log(context);
            
        },
        onResponse: (context) => {
            // console.log(context);
        }
    });

    
</script>

<template>  
    <div>
        home

        {{  data.data.value?.data }}
    </div>
</template>