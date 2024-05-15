// stores/booksStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBooksStore = defineStore("books", () => {
  const popularBooks = ref([
    {
      title: "Пригоди Краплинки",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка1.png",
    },
    {
      title: "Лінивий Монстрик",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка2.png",
    },
    {
      title: "Корисні Казки",
      characteristics: {
        lang: "Українська",
        age: "5+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка3.png",
    },
    {
      title: "Енциклопедія для малюків",
      characteristics: {
        lang: "Українська",
        age: "0+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка4.png",
    },
    {
      title: "Розвиток мовлення",
      characteristics: {
        lang: "Українська",
        age: "16+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка5.png",
    },
  ]);
  const developingBooks = ref([
    {
      title: "Пригоди Краплинки 2",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка1.png",
    },
    {
      title: "Лінивий Монстрик 2",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка2.png",
    },
    {
      title: "Корисні Казки 2",
      characteristics: {
        lang: "Українська",
        age: "5+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка3.png",
    },
    {
      title: "Енциклопедія для малюків 2",
      characteristics: {
        lang: "Українська",
        age: "0+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка4.png",
    },
    {
      title: "Розвиток мовлення 2",
      characteristics: {
        lang: "Українська",
        age: "16+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/Книжка5.png",
    },
  ]);
  return {
    popularBooks,
    developingBooks,
  };
});
