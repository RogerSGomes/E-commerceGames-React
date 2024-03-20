import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

export class ProductsModule {
  productsController!: ProductsController;
  productsService!: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
    this.productsController = new ProductsController(this.productsService);
  }
}
