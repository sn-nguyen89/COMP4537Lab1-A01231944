import React from 'react'

function City({ aCity }) {
  const { temperature, name, description } = aCity;

  return (
    <div>
      <h4>
        {name} temp. is {temperature}
      </h4>
      <p>
        {name} weather {description}
      </p>
      <hr />
    </div>
  )
}

export default City