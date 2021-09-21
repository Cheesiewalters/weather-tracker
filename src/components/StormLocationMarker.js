import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/storm-circle";

const StormLocationMarker = ({ lat, lng, onClick }) => {
  console.log("I am here");
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="storm-location-icon" />
    </div>
  );
};

export default StormLocationMarker;
