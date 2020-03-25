import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './my-leaflet.css';

class MyLeaflet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 28.128081,
            lng: -15.4467406,
            zoom: 9,
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        const position2 = [48.8587741, 2.2069771];
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution=''
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Aparcamiento de las ramblas
                  </Popup>
                </Marker>
                <Marker position={position2}>
                    <Popup>
                        París lindo y bonito
                  </Popup>
                </Marker>
            </Map>
        );
    }
}

export default MyLeaflet;