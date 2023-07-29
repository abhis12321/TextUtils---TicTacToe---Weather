import React from 'react';
import Tic from './tic/Tic.js'

export default function Home(props) {
  document.title = "Tic Tac Toe";
  return (
    <div>
      <Tic mode={props.mode}/>
    </div>
  )
}
