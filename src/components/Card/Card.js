import React from "react";

const Card = (props) => {
  const { shadow, rounded, children, classes, icon } = props;

  return (
    <div
      className={`${shadow && `shadow-${shadow}`} ${
        rounded && `rounded-${rounded}`
      } ${classes} relative`}
    >
      {icon && (
        <div
          className="h-12 w-12 rounded-full bg-pink-400 absolute -top-6"
          style={{ boxShadow: "0px 6px 4px 0px rgba(232,75,159,0.3)" }}
        >
          <img
            src={`data:image/svg+xml;utf8,${icon}`}
            className="h-6 w-6 mt-2 mx-auto "
          />
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
