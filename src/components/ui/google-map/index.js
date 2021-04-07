import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../../../assets/images/icons/map-marker.png'
import { GooglMapWrap } from './style'


const GoogleMap = (props) => {
    const { center, APIKey, zoom, ...restProps } = props
    return (
        <GooglMapWrap {...restProps}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: APIKey }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <div className="marker">
                    <img src={MapMarker} alt="Map Marker" />
                </div>
            </GoogleMapReact>
        </GooglMapWrap>
    );
}

GoogleMap.defaultProps = {
    center: {
        lat: 23.8593562,
        lng: 90.4005381
    },
    APIKey: "AIzaSyAFWDc91pRYRHeBy7Ktu3120fx30Tg60n8",
    zoom: 15
}

export default GoogleMap;