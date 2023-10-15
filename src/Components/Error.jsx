import React from 'react';
import './SCSS/Error.scss';

export default function Error({errorMessage}) {
  return (
    <>
    <div className="container-fluid errorr">
      <h1>{errorMessage}</h1>
    </div>
    </>
  )
}
