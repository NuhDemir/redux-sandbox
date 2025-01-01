import { produce } from "immer";

const book = {
  author: "Hakan Günday",
  book: {
    name: "Kinyas ve Kayra",
    price: 25,
    isPublished: true,
    isBestSeller: true,
    isAvailable: true,
    rating: 4.5,
    reviews: 100,
    pages: 250,
    isHardCover: true,
    isDigital: false,
    isAudio: false,
    isPaperback: true,
  },
};

produce(book, (draftState) => {
  draftState.book.price = 30;
  draftState.book.isBestSeller = false;
});

const arrayOfBooks = ["Book1", "Book2", "Book3", "Book4"];
