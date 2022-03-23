import React from "react";
import FormInstructions from "./FormInstructions";
import FormOptions from "./FormOptions";

export const Form = () => {
  return (
    <div className="container">
      <FormInstructions instruction="¿Qué tipo de alojamiento vas a compartir?" />
      <FormOptions
        firstOptionText="Casa"
        secondOptionText="Apartamento"
        thirdOptionText="Finca"
        fourthOptionText="Hotel"
        imgFirst="https://images.pexels.com/photos/4061977/pexels-photo-4061977.jpeg?cs=srgb&dl=pexels-erik-mclean-4061977.jpg&fm=jpg"
        imgSecond="https://images.pexels.com/photos/259239/pexels-photo-259239.jpeg?cs=srgb&dl=pexels-pixabay-259239.jpg&fm=jpg"
        imgThird="https://images.pexels.com/photos/979190/pexels-photo-979190.jpeg?cs=srgb&dl=pexels-connie-mulloy-979190.jpg&fm=jpg"
        imgFourth="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?cs=srgb&dl=pexels-donald-tong-189296.jpg&fm=jpg"
        altFirst="home front view and car"
        altSecond="Your beautiful apartment"
        altThird="Countryside home with snow"
        altFourth="Hotel Chairs by pool"
        idFirst="hostHouse"
        idSecond="hostApartment"
        idThird="hostEstate"
        idFourth="hostHotel"
      />
    </div>
  );
};
