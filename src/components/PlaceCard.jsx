import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import loadingGif from '../images/cardLoading.gif';
import Reviews from './Reviews.jsx';
const axios = require('axios');


class PlaceCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photo: null,
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.place.photo_ref !== prevProps.place.photo_ref) {
      this.getData()
    }
  }

  getData() {
    axios({
      method: 'get',
      url: `/getPlaceImage/${this.props.place.photo_ref}`,
    })
      .then((img) => {
        this.setState({
          photo: img.data,
        })
      })
  }

  render() {

    const cardStyle = {
      height: '500px',
      width: '400px',
    }

    const mediaStyles = {
      height: '0',
      paddingTop: '60%',
    }

    const contentStyles = {
      fontFamily: '-apple-system',
      height: '40%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      // background: 'red',
    }

    return (
      <React.Fragment>
        {
          this.state.photo
            ? <React.Fragment>
              <Card style={cardStyle} raised>
                <CardMedia
                  style={mediaStyles}
                  image={this.state.photo}
                  title="Image"
                />
                <CardContent style={contentStyles}>
                  <Typography variant="h6">{this.props.place.name}</Typography>
                  <Reviews>{this.props.place.rating} ({this.props.place.total_ratings})</Reviews>
                  <Typography>{this.props.place.price_level || 'no pricing found'}</Typography>
                  <Typography>{this.props.place.address}</Typography>
                </CardContent>
              </Card>
            </React.Fragment>
            : <React.Fragment>
              < Card style={cardStyle}>
                <CardMedia
                  style={mediaStyles}
                  image={loadingGif}
                  title="Loading gif"
                />
                <CardContent>
                  <Typography>{''}</Typography>
                  <Typography>{''}</Typography>
                  <Typography>{''}</Typography>
                  <Typography>{''}</Typography>
                </CardContent>
              </Card >
            </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default PlaceCard;