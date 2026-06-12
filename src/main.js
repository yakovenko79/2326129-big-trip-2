import FilterView from './view/filter-view/filters-view.js';
import { render } from './render.js';
import SortingView from './view/sorting-view/sorting-view.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteFilters = siteHeaderElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteSorting = siteMainElement.querySelector('.trip-events');

render(new FilterView(), siteFilters);
render(new SortingView(), siteSorting);
