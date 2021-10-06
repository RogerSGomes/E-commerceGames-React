import "./homePage.css";

function HomePage() {
  return (
    <div className="HomePage">

      {/* Cabeçalho */}
      <div className="jumbotron">

        <div className="item_blur" />

        {/* Sessão 1 */}
        <div className="session_1">

          {/* Item */}
          <div className="container_item">
            <div className="item_body">
              <p className="item_title">Nome do Jogo</p>
              <p className="item_subtitle">Subtítulo</p>
              <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac tellus nec nulla auctor luctus. Nullam sit amet gravida diam. In at porttitor nisi. Aenean volutpat, nibh aliquet interdum dignissim, est augue dictum ipsum, nec imperdiet quam sapien nec turpis. Mauris ut ipsum tempor, viverra nisi eu, dictum diam. Sed quis cursus velit. Sed sed tellus viverra, auctor tortor ac, bibendum ligula. Morbi nunc ex, rutrum sed cursus ut, aliquet eu diam. Aliquam faucibus ante id auctor elementum. Donec aliquam mi vel tincidunt tincidunt. Curabitur pretium nisl odio, id vulputate magna suscipit blandit. Quisque laoreet vehicula gravida. Nulla facilisi. Sed a purus nibh. </p>
            </div>
            <div className="item_footer">
              <button className="item_button" type="button">Comprar Agora</button>
            </div>
          </div>

        </div>

        {/* Sessão 2 - Vazio */}
        <div className="session_2" />

        {/* Carousel */}
        <div className="carousel" />

      </div>
      {/* Fim do Cabeçalho */}

      {/* Container 1 */}
      <div className="container">

      </div>
      {/* Fim do Container 1 */}

    </div>
  );
}

export default HomePage;
