import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import StormLocationMarker from "./StormLocationMarker";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              sources: ev.sources,
              cords: ev.geometries[0].coordinates,
            })
          }
        ></LocationMarker>
      );
    } else if (ev.categories[0].id === 10) {
      return ev.geometries.map((geo) => {
        console.log("ev" + ev.title);
        console.log("geo" + geo.coordinates[1]);
        return (
          <StormLocationMarker
            lat={geo.coordinates[1]}
            lng={geo.coordinates[0]}
            onClick={() =>
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                sources: ev.sources,
                cords: geo.coordinates,
              })
            }
          ></StormLocationMarker>
        );
      });
    }
    return null;
  });
  console.log(markers);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCVzzW0uVIFLXaen-0RaHEgwWzUPG-6vA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  eventData: [],
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
