<template>
  <div class="flex flex-row">
    <SideMenu />
    <div class="flex flex-col w-full">
      <HelloUser />
      <BooksCatalog />
    </div>
  </div>
</template>

<script setup>
import SideMenu from "../components/home/SideMenu.vue";
import HelloUser from "../components/home/HelloUser.vue";
import BooksCatalog from "../components/home/BooksCatalog.vue";
</script>