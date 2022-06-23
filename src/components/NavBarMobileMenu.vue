<script setup lang="ts">
import { ref } from "vue";
import Menu from "vue-material-design-icons/Menu.vue";
import Close from "vue-material-design-icons/Close.vue";

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  }
})

const menuVisible = ref(false);
const changeMenuVisibilityState = function () {
  menuVisible.value = !menuVisible.value;
};
</script>

<template>
  <div @click="changeMenuVisibilityState">
    <Menu
      fill="white"
      class="cursor-pointer hover:text-green-300 transition md:hidden absolute left-0 ml-5"
    />
  </div>
  <Transition>
    <div v-if="menuVisible" class="h-screen w-10/12 absolute left-0 top-0 z-20 bg-dark shadow-red-500">
      <div class="flex flex-col">
        <div @click="changeMenuVisibilityState" class="m-5 active:text-green-300">
          <Close fill="white" class="cursor-pointer" />
        </div>
        <ul>
          <li v-for="item in props.menuItems">{{ item.label }}</li>
        </ul>
      </div>
    </div>    
  </Transition>
  <Transition name="fade">
    <div v-if="menuVisible" @click="changeMenuVisibilityState" class="h-screen w-full absolute z-10 top-0 bg-dark/70" />
  </Transition>
</template>

<style lang="sass" scoped>
.v-enter-active, .v-leave-active
  transition: transform .35s cubic-bezier(0.5, 1, 0.5, 1)

.v-enter-from, .v-leave-to
  transform: translateX(-200%)

.fade-enter-active, .fade-leave-active
  transition: opacity .5s ease

.fade-enter-from, .fade-leave-to
  opacity: 0
</style>
