import { fill } from './fillCatalog.js';
import { productSave } from './productSave.js';
import { preloader } from './_preloader.js';
preloader();

try {
  fill('kaws');
  productSave();
} catch (e) {
  console.log(`Message: ${e.message}`);
}
