<script setup lang="ts">
const prop = defineProps({
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: URL,
        required: true,
    }
})
</script>

<template>
    <div class="flex items-center absolute right-0 top-0 h-full">
        <span class="font-gray text-lg mr-4 hidden md:block">{{ prop.name }}</span>
        <div class="w-7 h-7 md:w-12 md:h-12 mr-5 md:mr-0 border-2 border-red-500 rounded-full overflow-hidden">
            <img :src="prop.picture" class="h-full w-full object-cover" v-once>
        </div>
    </div>
</template>