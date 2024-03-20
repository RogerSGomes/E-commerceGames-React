import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AuthRouter } from "./routers/auth.router";
import { ProductsRouter } from "./routers/products.router";

function bootstrap(applicationPort: number) {
  const app = express();

  app.use(cors({ origin: "*" }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  const authRouter = new AuthRouter();
  const productsRouter = new ProductsRouter();

  authRouter.registerRoutes(app);
  productsRouter.registerRoutes(app);

  app.listen(applicationPort, () => {
    console.log(`server listening on port ${applicationPort}`);
  });
}

bootstrap(8080);
