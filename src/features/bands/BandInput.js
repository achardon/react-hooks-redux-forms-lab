import React, { useState } from "react";

function BandInput( {onBandSubmit} ) {
  const [name, setName] = useState("")

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    onBandSubmit(name)
    setName("")
  }

  return (
      <form onSubmit={handleSubmit}>
        <label>Name: 
          <input label="name" type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="add band"/>
      </form>
  )
}

export default BandInput;
