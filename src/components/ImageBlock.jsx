import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/_imageblock.scss";

const ImageBlock = ({ src, alt, caption, className }) => {
  const navigate = useNavigate();
  return (
    <figure
      className={`figure ${className}`}
      onClick={() =>
        navigate("/new", {
          state: {
            selectedTitle: alt,
            selectedDescription: caption,
            selectedImg: src,
          },
        })
      }
    >
      <img src={src} alt={alt} />
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  );
};

export default ImageBlock;
