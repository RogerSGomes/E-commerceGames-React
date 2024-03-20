import { Express, Router } from "express";
import { ProductsController } from "../modules/products/products.controller";
import { IApplicationRouter } from "../shared/interfaces/application-router.interface";
import { ProductsModule } from "../modules/products/products.module";

export class ProductsRouter implements IApplicationRouter<ProductsController> {
  controller: ProductsController;
  router: Router = Router();

  constructor() {
    this.controller = new ProductsModule().productsController;
  }

  registerRoutes(app: Express): void {
    this.router.get("/", this.controller.handleGetAllProducts);

    app.use("/products", this.router);
  }
}
