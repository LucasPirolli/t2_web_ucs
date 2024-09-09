import Card from "../components/Card";
import Footer from "../components/Footer";
import ImageBlock from "../components/ImageBlock";
import Topbar from "../components/Topbar";
import "../styles/pages/main.scss";

const Main = () => {
  const people = [
    {
      name: "Gustavo Uribe",
      description:
        "Lula ajusta prioridades para último mês de campanha municipal",
      imgSrc:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/foto_gustavo_uribe_blog2-e1707507026677.png?w=90&h=118&crop=1",
    },
    {
      name: "Daniela Lima",
      description:
        "Câmara aprova PL sobre segurança de dados pessoais no Brasil",
      imgSrc:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/02/foto_basilia_rodrigues_blog-e1708465415817.png?w=90&h=118&crop=1",
    },
    {
      name: "Renato Souza",
      description: "Eleições se aproximam e partidos já começam articulações",
      imgSrc:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/caiojunqueira2-e1709836937348.png?w=90&h=118&crop=1",
    },
    {
      name: "Natuza Nery",
      description:
        "Entenda como as reformas econômicas podem impactar o mercado",
      imgSrc:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/Teo-Cury.png?w=90&h=118&crop=1",
    },
  ];

  return (
    <>
      <Topbar />
      <section className="container-fullbanner">
        <img
          src="https://tpc.googlesyndication.com/simgad/1720724806653623521"
          alt="Full Banner"
          className="image"
        />
      </section>
      <div className="container-main">
        <section className="container-block-list">
          <ImageBlock
            src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportWorldNews/tagreuters.com2024binary_LYNXMPEK750YZ-FILEDIMAGE-e1722996504138.jpg?w=756&h=638&crop=1"
            alt="O secretário de Estado dos EUA, Antony Blinken"
            caption='Blinken diz que Edmundo González continua sendo "melhor esperança" à Venezuela'
            className="first"
          />

          <div className="list">
            <ImageBlock
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportBusinessNews/tagreuters.com2024binary_LYNXMPEK560JD-FILEDIMAGE.jpg?w=531&h=298&crop=1"
              alt="O secretário de Estado dos EUA, Antony Blinken"
              caption='Blinken diz que Edmundo González continua sendo "melhor esperança" à Venezuela'
              className="second"
            />
            <ImageBlock
              src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/Kate-Middleton.jpg?w=531&h=298&crop=1"
              alt="Kate Middleton em Londres"
              caption='Kate Middleton finaliza quimioterapia contra o câncer: "Não posso dizer o alívio que é ter concluído'
              className="third"
            />
          </div>
        </section>

        <section className="container-blogs-columns">
          <h2 className="title">Blogs e Colunas</h2>

          <div className="content">
            {people.map((person, index) => (
              <Card
                key={index}
                imgSrc={person.imgSrc}
                name={person.name}
                description={person.description}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Main;
