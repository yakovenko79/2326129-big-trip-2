import { createSortingTemplate } from './sorting-view-template';
import { createElement } from '../../render';

export default class SortingView {
  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
