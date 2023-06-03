import { fill } from './fillCatalog.js';
import { productSave } from './productSave.js';

try {
  fill('kaws');
  productSave();
} catch (e) {
  console.log(`Message: ${e.message}`);
}
