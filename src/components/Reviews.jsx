import React from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Rating from '@material-ui/lab/Rating';



const Reviews = (props) => {
  const { value } = props;
  console.log('value', value)
  return (
    <Rating
      readOnly
      precision={0.1}
      name="reviews"
      value={value}
      icon={<FastfoodIcon />}
    />
  )
};

export default Reviews;