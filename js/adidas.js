import { fill } from './fillCatalog.js';
import { productSave } from './productSave.js';
import { preloader } from './_preloader.js';
preloader();
fill('adidas');
productSave();
