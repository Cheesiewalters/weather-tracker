import spinner from "./load-loading.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading"></img>
      <h1>Fetching Data</h1>
    </div>
  );
};

export default Loader;
