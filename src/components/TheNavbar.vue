<script setup lang="ts">
import { ref } from "vue";

const navItems = ref([
    { label: 'Home', to: '/' },
    { label: 'Search', to: '/search' },
    { label: 'My library', to: '/my-library' }
])
</script>

<template>
    <div class="w-full flex justify-around bg-dark text-white font-eesti">
        <ul class="flex items-center text-lg">
            <li v-for="item in navItems" :key="item.label">
                <router-link :to="item.to">{{ item.label }}</router-link>
            </li>
        </ul>
        <h1 class="text-3xl font-medium uppercase">music legends</h1>
    </div>
</template>