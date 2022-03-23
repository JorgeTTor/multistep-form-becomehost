import React from "react";

export const ButtomForm = (text, imgUrl, alt, identifier) => {
  return (
    <div className="acommodation">
      <label for={identifier} class=""></label> { // host-home. This label had a class that correspond with button.
      }
      <button id={identifier} type="submit" class="btn"> {// This button had a class that correspond with label.
      }
        <img
          class="hosting-image"
          src={imgUrl}
          alt={alt}
        />
        <span>{text}</span>
      </button>
    </div>
  );
};
