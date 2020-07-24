import React from 'react';


let Movie = (props) => {
  console.log('movie props', props)
  return (
    <div style={{ padding: '20px', borderStyle: 'solid' }}>{props.title}</div>
  )
}

export default Movie;