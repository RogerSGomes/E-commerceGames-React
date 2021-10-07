import "./homePage.css";

import ProductCard from "./components/productCard";
import ItemContainer from "./components/itemContainer";

import background_card1 from "../../assets/homePage_images/img1.jpg";
import background_card2 from "../../assets/homePage_images/img2.jpg";
import background_card3 from "../../assets/homePage_images/img3.jpg";
import background_card4 from "../../assets/homePage_images/img4.jpg";
import background_card5 from "../../assets/homePage_images/img5.jpg";
import background_card6 from "../../assets/homePage_images/img6.jpg";
import background_card7 from "../../assets/homePage_images/img7.jpg";
import background_card8 from "../../assets/homePage_images/img8.jpg";
import background_card9 from "../../assets/homePage_images/img9.jpg";

function HomePage() {
  return (
    <div className="HomePage">

      {/* Cabeçalho */}
      <div className="jumbotron">

        <div className="item_blur" />

        {/* Sessão 1 */}
        <div className="session_1">

          {/* Item */}
          <ItemContainer
            isActive
            title="GTA V"
            subtitle="Los Santos"
            description="Onde as pessoas falsas, os lugares falsos e os problemas falsos se encontram."
          />
          <ItemContainer
            title="Red Dead Redemption 2"
            subtitle=""
            description="Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de 250 notas máximas, Red Dead Redemption 2 é uma história épica de honra e lealdade no alvorecer dos tempos modernos. Inclui Red Dead Redemption 2: Modo História e Red Dead Online."
          />
          <ItemContainer
            title="Battlefield 4"
            subtitle="Domine a Terra, o Mar e o Ar"
            description="Participe da destruição incomparável de Battlefield 4™. Faça parte do caos glorioso da guerra total com desafios táticos recompensadores em um cenário interativo."
          />
          <ItemContainer
            title="Celeste"
            subtitle=""
            description="Ajude Madeline a enfrentar seus demônios internos em sua jornada até o topo da Montanha Celeste, nesse jogo de plataforma super afiado dos criadores de TowerFall. Desbrave centenas de desafios meticulosos, descubra segredos complicados e desvende o mistério da montanha."
          />
          <ItemContainer
            title="Paladins"
            subtitle="Se torne um campeão do reino"
            description="O jogo de tiro em esquipes com temática de fantasia que é um grande sucesso. Junte-se a mais de 30 milhões de jogadores e torne-se um lendário Campeão do Reino, personalizando seu conjunto de habilidades para montar um estilo próprio de jogo."
          />

        </div>

        {/* Sessão 2 - Vazio */}
        <div className="session_2" />

        {/* Carousel */}
        <div className="carousel" />

      </div>
      {/* Fim do Cabeçalho */}

      {/* Container 1 */}
      <div id="loja" className="container">
        <h1>Loja de Games</h1>
        <div className="products">
          <ProductCard
            name="GTA V"
            price="R$ 100,00"
            img={background_card1}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Red Dead Redemption 2"
            price="R$ 200,00"
            img={background_card2}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Battlefield 4"
            price="R$ 300,00"
            img={background_card3}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Celeste"
            price="R$ 400,00"
            img={background_card4}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Paladins"
            price="R$ 500,00"
            img={background_card5}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Valorant"
            price="R$ 600,00"
            img={background_card6}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Limbo"
            price="R$ 700,00"
            img={background_card7}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Need For Speed Heat"
            price="R$ 800,00"
            img={background_card8}
            isXbox isPS isPC isSwitch isAndroid
          />
          <ProductCard
            name="Fifa 18"
            price="R$ 900,00"
            img={background_card9}
            isXbox isPS isPC isSwitch isAndroid
          />
        </div>
      </div>
      {/* Fim do Container 1 */}

    </div>
  );
}

export default HomePage;
