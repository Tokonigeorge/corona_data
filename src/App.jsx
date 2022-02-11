import { useEffect } from "react";
import "./App.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateData } from "./store/coronaData/data";

function App() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateData({ id: 1 }));
  }, []);

  return (
    <div className="App">
      {console.log(data)}
      <p>Testing</p>
    </div>
  );
}

export default App;
