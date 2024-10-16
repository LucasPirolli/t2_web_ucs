import React from "react";

const Icon = ({ name, ...rest }) => {
  const iconsList = {
  };

  const icon = iconsList[name];

  return (
    <svg fill="none" {...rest}>
      {icon}
    </svg>
  );
};

export default Icon;
