import React, { Component } from 'react';
import { connect } from "react-redux";
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.03684041381049,//would typically use geocoding api as well to get users current location
      lng: -87.90384783046967,
    },
    zoom: 15
  };
 
  render() {
    const { lat, lon } = this.props.match.params;
    return (
      <React.Fragment>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDAop-0sYg2ODN3R3DBjqChGNtoWdLl-KY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
           <Marker
            lat={lat}
            lng={lon}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
      </div>
      </React.Fragment>
    );
  }
}
 
const mapStateToProps = (state) => ({
    user: state.user,
  });
  
  export default connect(mapStateToProps)(SimpleMap);
  