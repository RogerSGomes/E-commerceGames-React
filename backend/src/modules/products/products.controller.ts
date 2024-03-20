import { ControllerMethod } from "../../shared/types/controller-fn.type";
import { ProductsService } from "./products.service";

export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  handleGetAllProducts: ControllerMethod = (request, response) => {
    const allProducts = this.productsService.getAllProducts();
    response.status(200).json(allProducts);
  };
}
