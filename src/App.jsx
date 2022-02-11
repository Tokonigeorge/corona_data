import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "./store/coronaData/data";
import axios from "axios";

const baseURL = "https://covidnigeria.herokuapp.com/api";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        dispatch(updateData(response.data));
        setLoading(false);
      })
      .catch((error) => setError(error), setLoading(false));
  }, []);

  if (error) return <p>Errorr</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className="App">
      {loading && <p>Loading</p>}
      {!loading && error && <p>An error has occured, consider, reloading</p>}
      {data && !loading && <p>Data...</p>}
    </div>
  );
}

export default App;
