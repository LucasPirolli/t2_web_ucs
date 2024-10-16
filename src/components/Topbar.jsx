import { useNavigate } from "react-router-dom";
import Customicon from "../components/Icons";
import "../styles/components/topbar.scss";

const Topbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <header className="container-topbar">
      <div className="image-menu">
        <Customicon name="menu" width="16" height="10" viewBox="0 0 16 10" />

        <a href="/" aria-label="Home">
          <img
            src="https://scontent.fcxj3-1.fna.fbcdn.net/v/t39.30808-1/305272071_391723499822396_8951544844169339986_n.png?stp=dst-png_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=iC4vLLmtk68Q7kNvgH112St&_nc_zt=24&_nc_ht=scontent.fcxj3-1.fna&_nc_gid=An5_--L1YGLybkGydAC0zw6&oh=00_AYBnbf-zhpXU0G3cXyqrGdNXQmXaOzZAT0x5-Xy-zCWqWg&oe=6715BA2E"
            alt="logo"
            className="logo"
          />
        </a>
      </div>
      <Customicon name="search" width="15" height="15" viewBox="0 0 20 20" />
    </header>
  );
};

export default Topbar;
