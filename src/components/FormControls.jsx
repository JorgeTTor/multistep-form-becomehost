import React from 'react';
import { ColorfulButton } from './ColorfulButton';
import TransparentButton from "./TransparentButton";

export const FormControls = (back, next) => {
  return (
    <div className='control-container'>
        <TransparentButton text={back} />
        <ColorfulButton text={next} />
    </div>
  )
}
