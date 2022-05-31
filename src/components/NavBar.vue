<script setup lang="ts">
import { ref } from "vue";
import NavBarUser from './NavBarUser.vue';
import Menu from 'vue-material-design-icons/Menu.vue';

const navItems = ref([
    { label: 'Home', to: '/' },
    { label: 'Search', to: '/search' },
    { label: 'My library', to: '/my-library' }
])
</script>

<template>
    <nav class="bg-transparent md:bg-dark text-white font-eesti py-5 absolute top-0 z-10 w-full">
        <div class="w-full flex justify-center relative mx-auto" style="max-width: 1200px">
            <Menu :size="32" fill="white" class="md:hidden absolute left-4 -top-1.5" />
            <ul class="hidden md:visible flex items-center text-lg text-gray absolute left-0 h-full">
                <li v-for="item in navItems" :key="item.label" class="px-8">
                    <router-link :to="item.to">{{ item.label }}</router-link>
                </li>
            </ul>
            <h1 class="text-md font-normal md:text-3xl md:font-medium uppercase">music legends</h1>
            <NavBarUser name="leo" picture="https://resi.ze-robot.com/dl/cu/cute-anime-girl-with-glasses-1280%C3%971024.jpg" />
        </div>
    </nav>
</template>