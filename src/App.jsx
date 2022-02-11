import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "./store/coronaData/data";
import "./App.css";
import axios from "axios";
import Wrapper from "./components/Wrapper";

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

  return (
    <div className="App min-h-screen w-screen bg-bg">
      {loading && (
        <CenterEl>
          <div class="dot-flashing"></div>
        </CenterEl>
      )}

      {!loading && error && (
        <CenterEl>
          <p className="bg-red-400 mx-6 md:mx-0 font-bold w-full md:w-1/2 text-center m-auto rounded-md py-4">
            An error has occured. Please Reload.
          </p>
        </CenterEl>
      )}

      {data && !loading && <Wrapper data={data?.data?.data} />}
    </div>
  );
}

const CenterEl = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center"></div>
  );
};

export default App;
