import React, {useState} from 'react'

const Form = ({ handleSubmit }) => {
  const [ location, setLocation ] = useState("")

  return (
    <form onSubmit={handleSubmit}>
        <input 
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Search location"
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default Form