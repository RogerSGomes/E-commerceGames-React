import { useState, useEffect } from 'react'
import Api from "../../services/api";

import "./homePage.css";

import ProductCard from "./components/productCard";
import ItemContainer from "./components/itemContainer";
import Carousel from "./components/carouselItem";

import Background from "../../assets/homePage_images/img3.jpg";


export default function HomePage() {
  console.log(Background);
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
    <div className="home_page">

      {/* Cabeçalho */}
      <div className="jumbotron">

        <div className="item_blur" />

        {/* Sessão 1 */}
        <div className="session_1">

          {/* Item */}
          {products.map((item, index) => {
            if (index === 0) {
              return <ItemContainer
                isActive
                key={index}
                title={item.titulo}
                subtitle={item.subtitulo}
                description={item.descricao}
              />;
            } else {
              return <ItemContainer
                key={index}
                title={item.titulo}
                subtitle={item.subtitulo}
                description={item.descricao}
              />;
            }
          })}
        </div>

        {/* Sessão 2 - Vazio */}
        <div className="session_2" />

        {/* Carousel */}
        <div className="carousel">
          <div className="carousel_selected">
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
          <div className="carousel_items">
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

      {/* Container 1 */}
      <div id="store" className="container">
        <h1>Loja de Games</h1>
        <div className="products">
          {products.map((item, index) => {
            return <ProductCard
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
