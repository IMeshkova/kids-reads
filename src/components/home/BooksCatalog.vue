<template>
  <section>
    <div class="flex flex-col lg:flex-row gap-4 p-2 md:pr-10 w-full h-full">
      <div class="bg-white rounded-xl p-3 flex w-full h-full">
        <div class="xl:gap-y-1 w-full">
          <div class="">
            <span class="font-semibold text-lg md:text-2xl">Популярні</span>
            <div class="flex flex-row gap-x-8 justify-evenly">
              <div
                v-for="(book, idx) in popularBooks"
                :key="idx"
                @click="selectBook(book)"
                :class="{
                  selected: selectedBook && selectedBook.title === book.title,
                }"
                class="cursor-pointer"
              >
                <img class="object-scale-down w-fit" :src="book.cover" alt="" />
              </div>
            </div>
          </div>
          <div class="mt-1">
            <span class="font-semibold text-lg md:text-2xl"
              >Для розвитку уяви</span
            >
            <div class="flex flex-row gap-x-8 justify-evenly mt-2">
              <div
                v-for="(book, idx) in devBooks"
                :key="idx"
                @click="selectBook(book)"
                :class="{
                  selected: selectedBook && selectedBook.title === book.title,
                }"
                class="cursor-pointer"
              >
                <img class="object-scale-down" :src="book.cover" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="selectedBook"
        class="flex flex-row lg:flex-col h-full gap-y-4 gap-x-4 w-full lg:w-[30%]"
      >
        <div class="flex flex-col bg-white rounded-xl p-4 h-full lg:h-1/2">
          <span class="text-red-400 text-lg md:text-2xl font-semibold"
            >Характеристики</span
          >
          <span class="text-gray-400 mt-4">Назва: </span>
          <span class="text-md font-semibold">{{ selectedBook.title }}</span>
          <span class="text-gray-400 mt-1">Вік: </span>
          <span class="text-md font-semibold">{{
            selectedBook.characteristics.age
          }}</span>

          <span class="text-gray-400 mt-1">Мова: </span>
          <span class="text-md font-semibold">{{
            selectedBook.characteristics.lang
          }}</span>
        </div>
        <div
          class="flex flex-col bg-white col-span-2 rounded-xl p-4 h-full lg:h-1/2"
        >
          <span class="text-red-400 text-lg md:text-2xl font-semibold"
            >Короткий опис</span
          >
          <span class="mt-4"> {{ selectedBook.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, defineComponent, ref } from "vue";
import { useBooksStore } from "../../stores/booksStore"; // Import your Pinia store

const booksStore = useBooksStore();
const popularBooks = computed(() => booksStore.popularBooks);
const devBooks = computed(() => booksStore.developingBooks);

const selectedBook = ref(null);

const selectBook = (book) => {
  selectedBook.value = book;
};
</script>


<style scoped>
.selected {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  height: fit-content;
}
</style>