import React from 'react'
import search from "../icons/search.svg"

const Form = ({ handleSubmit, onChange, value }) => {

  return (
    <form onSubmit={handleSubmit}>
        <input 
          onChange={onChange}
          value={value}
          placeholder="Search location"
        />
        <button type="submit" disabled={value ? false : true} loading="lazy">
          <img src={search} alt="search"/>
        </button>
    </form>
  )
}

export default Form