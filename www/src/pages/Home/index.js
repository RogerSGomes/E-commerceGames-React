import { useState, useEffect } from 'react'
import Api from "../../services/Api/index";

import "./index.css";

import Product from "./Product";
import Box from "./Box";
import Carousel from "./Carousel";

export default function Home() {
  // Tratamento API - Produtos
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api.get("/product")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="homePage">

      {/* Início do Cabeçalho */}
      <div className="jumbotron">

        <div className="itemBlur" />

        {/* Início da Sessão 1 */}
        <div className="session1">

          {/* Item */}
          {products.map((item, index) => {
            if (index === 0) {
              return <Box
                isActive
                key={index}
                title={item.titulo}
                subtitle={item.subtitulo}
                description={item.descricao}
              />;
            } else {
              return <Box
                key={index}
                title={item.titulo}
                subtitle={item.subtitulo}
                description={item.descricao}
              />;
            }
          })}
        </div>

        {/* Sessão 2 - Vazio */}
        <div className="session2" />

        {/* Início do Carousel */}
        <div className="carousel">
          <div className="carouselSelected">
            {products.map((item, index) => {
              return <Carousel
                key={index}
                isActive
                img={item.imagem}
                isXbox={item.plataformas.xbox}
                isPS={item.plataformas.ps}
                isPC={item.plataformas.pc}
                isAndroid={item.plataformas.android}
                isSwitch={item.plataformas.switch}
              />
            }).filter((item, index) => index === 0)}
          </div>
          <div className="carouselItems">
            {products.map((item, index) => {
              return <Carousel
                key={index}
                img={item.imagem}
                isXbox={item.plataformas.xbox}
                isPS={item.plataformas.ps}
                isPC={item.plataformas.pc}
                isAndroid={item.plataformas.android}
                isSwitch={item.plataformas.switch}
              />;
            }).filter((item, index) => index !== 0)}
          </div>
        </div>

      </div>
      {/* Fim do Cabeçalho */}

      {/* Início do Container 1 */}
      <div id="store" className="container">
        <h1>Loja de Games</h1>
        <div className="products">
          {products.map((item, index) => {
            return <Product
              key={index}
              img={item.imagem}
              title={item.titulo}
              price={item.preco}
              isXbox={item.plataformas.xbox}
              isPS={item.plataformas.ps}
              isPC={item.plataformas.pc}
              isAndroid={item.plataformas.android}
              isSwitch={item.plataformas.switch}
            />;
          })}
        </div>
      </div>
      {/* Fim do Container 1 */}
    </div>
  );
}
