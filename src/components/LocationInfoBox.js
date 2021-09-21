const LocationInfoBox = ({ info }) => {
  const source = info.sources.map((ev) => {
    return <li>SOURCE: {ev.url}</li>;
  });
  const coords = info.cords.map((ev) => {
    return <li>Co-ordinates: {ev}</li>;
  });
  console.log(source);
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
        {source}
        {coords}
      </ul>
    </div>
  );
};

export default LocationInfoBox;
