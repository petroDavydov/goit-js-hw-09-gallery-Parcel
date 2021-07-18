import { refs } from "./refs";

export function isGalleryImage(event) {
  const isGalleryImageElement = event.target.classList.contains(
    "gallery__image"
  );
  if (!isGalleryImageElement) {
    return;
  } else if (isGalleryImageElement) {
    event.preventDefault();
    refs.lightBoxEl.classList.add("is-open"); // добавил клас на елемент
    refs.lightboxImage.src = event.target.getAttribute("data-source"); // взял из шаблонних строк для  замени картинки на большую
    refs.lightboxImage.alt = event.target.alt; // добавил описание через alt
    // console.log(lightboxImage); // виводит адрес и альт

    refs.lightboxImage.dataset.index = event.target.dataset.index;
  }
  window.addEventListener("keyup", keyEscape); // добавил прослушиватель на кнопку `Escape`
}

export function closeLightBoxWindow() {
  refs.lightBoxEl.classList.remove("is-open");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
  window.removeEventListener("keyup", keyEscape);
}

export function closeLightBoxImage(event) {
  if (event.target === event.currentTarget) {
    closeLightBoxWindow();
  }
}

export function keyEscape(event) {
  if (event.code === "Escape") {
    closeLightBoxWindow();
  }
}

export function onOverlayClose() {
  // создал функцию закрития по клику на оверлей
  closeLightBoxWindow();
}
