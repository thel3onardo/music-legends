<script setup lang="ts">
const props = defineProps({
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
    <div class="flex items-center absolute right-0 h-full">
        <span class="font-gray text-lg mr-4">{{ props.name }}</span>
        <div class="w-12 h-12 rounded-full overflow-hidden">
            <img :src="props.picture" class="h-full w-full object-cover" v-once>
        </div>
    </div>
</template>