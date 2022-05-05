import React from "react";
import BandInput from "./BandInput";
import { useSelector, useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {

  const bands = useSelector(state => state.bands.entities)
  // console.log(bands)

  const dispatch = useDispatch()
  // console.log(dispatch)

  function onBandSubmit(name) {
    dispatch(bandAdded(name))
  }

  return (
    <div>
      <h1>Bands Container</h1>
      <BandInput onBandSubmit={onBandSubmit} />
      <div>
        {bands.map(band => <li key={band}>{band}</li>)}
      </div>
    </div>
  );
}

export default BandsContainer;
