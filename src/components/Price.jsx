import React from 'react';
import Rating from '@material-ui/lab/Rating';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Price = (props) => {

  function IconContainer(props) {
    const { value } = props;
    let icons = [];
    for (let i = 0; i < value; i++) {
      icons.push(<AttachMoneyIcon key={i} style={{ color: 'green' }} />);
    }
    return <span>{icons}</span>;
  }

  return (
    <React.Fragment>
      {IconContainer(props)}
    </React.Fragment>
  )
}

export default Price;