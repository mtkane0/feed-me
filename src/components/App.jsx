import React from 'react';
import Title from './Title.jsx';
import SiteInfo from './SiteInfo.jsx';
import ZipForm from './ZipForm.jsx';

import PlaceCard from './PlaceCard.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import loadGif from '../images/loader-2_food.gif';
import bottomBG from '../images/foods-bg.png';
import IconButton from '@material-ui/core/IconButton';

import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';


const axios = require('axios');



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zip: '',
      loading: false,
      stopLoading: false,
      places: null,
      currentPlace: null,
      index: 0,
    }
    this.getPlaces = this.getPlaces.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  getLocation(zipcode) {
    console.log('zipcode', zipcode)
    axios.get(`/searchBy/${zipcode}`)
      .then((places) => {
        this.setState({
          places: places.data,
          stopLoading: true,
          currentPlace: places.data[this.state.index]
        })
      })
  }

  getPlaces(zip) {
    this.setState({
      loading: true,
      zip,
    }, this.getLocation(zip));
  }

  handleCancel(e) {
    //update to next place,
    let index = this.state.index + 1;
    this.setState({
      currentPlace: this.state.places[index],
      index,
    })
    //remember to suggest less like that
  }

  handleSelect() {
    let address = this.state.currentPlace.address;
    let urlEscapedAddress = address.replace(' ', '+');
    urlEscapedAddress = urlEscapedAddress.replace(',', '%2C');
    alert(`Redirecting to ${this.state.currentPlace.name}!`);
    window.location.href = `https://www.google.com/maps/dir/?api=1&destination=${urlEscapedAddress}&`;
    return null;
  }

  render() {
    const appContainer = {
      height: '100vh',
    }

    const innerContainers = {
      // border: '2px solid red',
      // padding: '20px',
    }

    const appStyle = {
      // background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 60%, rgba(255, 183, 102, 0.724527733118971) 77%)',


    }
    const acceptButtonStyles = {
      color: '#00FF00',
    }
    const cancelButtonStyles = {
      color: '#ff6347',
    }

    const iconStyles = {
      width: '60',
      height: '60'
    }

    const bottomStyle = {
      // border: '1px red solid',
      width: '100vw',
      position: 'fixed',
      bottom: '0',
      paddingBottom: '200px',
      backgroundImage: `url(${bottomBG})`,
    }

    const itemsStyles = {
      paddingTop: '50px'
    }


    return (
      <div style={appStyle}>
        <Title />
        <Grid container style={appContainer}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item container style={innerContainers}
            direction="column"
            justify="center"
            alignItems="center"
          >
            {
              this.state.loading && this.state.stopLoading
                ? <React.Fragment>
                  <Grid item container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}
                    style={itemsStyles}
                  >
                    <Grid item>
                      <IconButton
                        onClick={this.handleCancel}
                        style={cancelButtonStyles}>
                        <CancelSharpIcon style={iconStyles} fontSize="large" />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <PlaceCard place={this.state.currentPlace} />
                    </Grid>
                    <Grid item>

                      <IconButton
                        onClick={this.handleSelect}
                        style={acceptButtonStyles}>
                        <CheckCircleSharpIcon style={iconStyles} fontSize="large" />
                      </IconButton>

                    </Grid>
                  </Grid>
                </React.Fragment>
                : this.state.loading
                  ? <img style={itemsStyles} src={loadGif} alt="Loading..." />
                  : <React.Fragment>
                    <Grid item style={itemsStyles}>
                      <SiteInfo />
                    </Grid>
                    <Grid item>
                      <ZipForm handleSubmit={this.getPlaces} />
                    </Grid>
                  </React.Fragment>
            }

          </Grid>
          <Grid item container>
          </Grid>
          <Grid item>

          </Grid>
          <div style={bottomStyle}></div>
        </Grid>
      </div>
    )
  }
}

export default App;
