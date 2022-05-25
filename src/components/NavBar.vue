<script setup lang="ts">
import { ref } from "vue";
import NavBarUser from './NavBarUser.vue';

const navItems = ref([
    { label: 'Home', to: '/' },
    { label: 'Search', to: '/search' },
    { label: 'My library', to: '/my-library' }
])
</script>

<template>
<nav class="bg-dark text-white font-eesti py-5">
    <div class="w-full flex justify-center relative mx-auto" style="max-width: 1200px">
        <ul class="flex items-center text-lg text-gray absolute left-0 h-full">
            <li v-for="item in navItems" :key="item.label" class="px-8">
                <router-link :to="item.to">{{ item.label }}</router-link>
            </li>
        </ul>
        <h1 class="text-3xl font-medium uppercase">music legends</h1>
        <NavBarUser name="leo" picture="https://resi.ze-robot.com/dl/cu/cute-anime-girl-with-glasses-1280%C3%971024.jpg" />
    </div>
</nav>
</template>