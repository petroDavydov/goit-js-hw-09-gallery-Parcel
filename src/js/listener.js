import { refs } from "./refs";
import {
  isGalleryImage,
  closeLightBoxWindow,
  closeLightBoxImage,
  onOverlayClose,
} from "./function";
refs.mainGallery.addEventListener("click", isGalleryImage);
refs.btnLightBox.addEventListener("click", closeLightBoxWindow);
refs.modal.addEventListener("click", closeLightBoxImage);
refs.overlayEl.addEventListener("click", onOverlayClose);
