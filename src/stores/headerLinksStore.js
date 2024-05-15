import { defineStore } from "pinia";
import { ref } from "vue";

export const useHeadersStore = defineStore("headerLinks", () => {
  const headerLinks = ref([
    { label: "Головна", url: "/" },
    { label: "Кабінет", url: "/" },
    { label: "Успішність", url: "/" },
    { label: "Улюблені", url: "/" },
    { label: "Гаманець", url: "/" },
    { label: "Налаштування", url: "/" },
  ]);
  return {
    headerLinks,
  };
});
