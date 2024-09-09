import { useNavigate } from "react-router-dom";
import Customicon from "../components/Icons";
import "../styles/components/topbar.scss";

const Topbar = () => {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Ao vivo",
    },
    {
      name: "Política",
    },
    {
      name: "Economia",
    },
    {
      name: "Esportes",
    },
    {
      name: "Pop",
    },
    {
      name: "Cadastre-se",
      link: "/form",
    },
  ];

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <header className="container-topbar">
      <div className="image-menu">
        <Customicon name="menu" width="16" height="10" viewBox="0 0 16 10" />

        <a href="/" aria-label="Home">
          <img
            src="https://www.cnnbrasil.com.br/wp-content/themes/master-theme/assets/img/log-cnn-brasil-transparent.svg"
            alt="logo"
            className="logo"
          />
        </a>
      </div>

      <ul className="navigation">
        {menu.map((item, index) => (
          <li key={index} className="link">
            <a onClick={() => handleNavigate(item.link)} href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <Customicon name="search" width="15" height="15" viewBox="0 0 20 20" />
    </header>
  );
};

export default Topbar;
