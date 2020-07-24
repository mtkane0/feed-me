import React from 'react';


let Movie = (props) => {
  console.log('moive props', props)
  return (
    <div>{props.title}</div>
  )
}

export default Movie;