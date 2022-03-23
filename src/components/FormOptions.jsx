import React from 'react'
import { ButtomForm } from "./ButtomForm";
import { FormControls } from "./FormControls";

const FormOptions = (firstOptionText, secondOptionText, thirdOptionText, fourthOptionText,
    imgFirst, imgSecond, imgThird, imgFourth,
    altFirst, altSecond, altThird, altFourth,
    idFirst, idSecond, idThird, idFourth) => {
  return (
    <form  action="">
            <fieldset>
                <ButtomForm text={firstOptionText} imgUrl={imgFirst} alt={altFirst} identifier={idFirst}/> 

                {/* ^^^ El identifier tal vez debería de ser Alojamiento y el valor lo que defina que será ^^^^ */}

                <ButtomForm text={secondOptionText} imgUrl={imgSecond} alt={altSecond} identifier={idSecond}/>

                <ButtomForm text={thirdOptionText} imgUrl={imgThird} alt={altThird} identifier={idThird}/>

                <ButtomForm text={fourthOptionText} imgUrl={imgFourth} alt={altFourth} identifier={idFourth}/>
            
                <FormControls back="Atrás" next="Siguiente"/>
            </fieldset>
        </form>
  )
}

export default FormOptions