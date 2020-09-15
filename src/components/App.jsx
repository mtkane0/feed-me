import React from 'react';
import Title from './Title.jsx';
import SiteInfo from './SiteInfo.jsx';
import ZipForm from './ZipForm.jsx';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      zip: ''
    }
    this.getPlaces = this.getPlaces.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation(zipcode) {
    console.log('zipcode', zipcode)
    axios.get(`/searchBy/${zipcode}`)
      .then((res) => {
        //res.data should be list of
        console.log(res)
      })
  }

  getPlaces(zip) {
    this.setState({
      zip,
    }, this.getLocation(zip));

  }




  render() {
    const appContainer = {
      height: '100vh',
      // border: '20px solid red',
    }

    const innerContainers = {
      // border: '2px solid red',
      // padding: '20px',
    }

    const appStyle = {
      // background: `url(https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80) no-repeat`,
      // backgroundSize: 'cover',
      // opacity: '0.3',
    }


    return (
      <div>
        <Title />
        <div style={appStyle}>
        </div>
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
            <Grid item>
              <SiteInfo />
            </Grid>
            <Grid item>
              <ZipForm handleSubmit={this.getPlaces} />
            </Grid>
          </Grid>
          <Grid item container style={innerContainers}
            direction="column"
            justify="center"
            alignItems="center"
          >
            {/* Cards will appear */}
          </Grid>
          <Grid item style={innerContainers}></Grid>
        </Grid>

      </div>
    )
  }
}

export default App;
