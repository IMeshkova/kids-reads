<template>
  <header class="w-screen h-24 md:h-28 items-center flex">
    <div class="hidden md:flex w-full items-center justify-between px-10">
      <div class="pr-4 lg:pr-2">
        <img src="../../assets/Logo.png" alt="" />
      </div>

      <div class="flex items-center w-[500px] lg:w-[700px] h-16">
        <input
          type="text"
          class="w-full h-full shadow-lg p-8 rounded-xl"
          placeholder="..."
          required
        />
        <button
          type="submit"
          class="h-full bg-white px-10 ml-2 text-xl text-black rounded-xl shadow-lg"
        >
          <span class="">Пошук</span>
        </button>
      </div>
      <div class="flex flex-row items-center">
        <Bell class="w-20" />
        <div
          class="w-16 h-16 rounded-full border-2 border-white shadow-lg flex justify-center items-center"
        >
          <img class="w-10" src="../../assets/ProfilePic.png" alt="" />
        </div>
      </div>
    </div>
    <div class="w-full flex md:hidden flex-col h-auto">
      <div class="w-full flex flex-row justify-between items-center px-10">
        <div class="w-24">
          <img src="../../assets/Logo.png" alt="" />
        </div>
        <Burger @click="toggleDropdown" class="object-contain w-10 md:hidden" />
      </div>

      <div
        v-if="isDropdownOpen"
        class="absolute w-full h-fit top-20 md:top-28 bg-primary"
      >
        <div class="flex flex-row items-center justify-center">
          <div
            class="w-16 h-16 rounded-full border-2 border-white shadow-lg flex justify-center items-center"
          >
            <img class="w-10" src="../../assets/ProfilePic.png" alt="" />
          </div>
        </div>
        <ul class="px-10 grid grid-cols-1">
          <li
            v-for="(item, idx) in headerLinks"
            :key="idx"
            class="flex p-2 text-lg font-semibold border-b-2 justify-between group hover:bg-gray-300 items-center"
          >
            {{ item.label }}
          </li>
        </ul>
        <div class="flex items-center w-full h-auto py-6 px-10 border-b-2">
          <input
            type="text"
            class="w-full h-full shadow-lg p-3 rounded-xl"
            placeholder="..."
            required
          />
          <button
            type="submit"
            class="bg-white p-2 ml-2 text-md text-black rounded-xl shadow-lg"
          >
            <span class="">Пошук</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useHeadersStore } from "../../stores/headerLinksStore";
import Bell from "../icons/BellIcon.vue";
import Burger from "../icons/BurgerIcon.vue";

const headerStore = useHeadersStore();
const headerLinks = headerStore.headerLinks;

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>


