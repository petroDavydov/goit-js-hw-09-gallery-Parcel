import { galleryItems } from "./mainobject";
import { refs } from "./refs";

function createImgCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }, index) => {
      return `<li class="gallery__item >
		<a
		  class="gallery__link"
		  href="${original}"
		>
		  <img
			class="gallery__image"
			src="${preview}"
			data-source="${original}" //взял єтот атрибут в функцию isGalleryImage
			alt="${description}"
			data-index="${index}"
		  />
		</a>
	  </li>`;
    })
    .join("");
}
// ===

const cardsItem = createImgCardMarkup(galleryItems); // вивел всею разметку в карточки
// console.log(cardsItem);

refs.mainGallery.insertAdjacentHTML("beforeend", cardsItem); // вставил разметку
// console.log(mainGalery);
