import logo from "./logo.svg";
import "./App.css";
import store from "./store";

function App() {
  // store.dispatch({
  //   type: "bugAdded",
  //   payload: {
  //     description: "Bug1",
  //   },
  // });

  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "Bug2",
    },
  });

  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "Bug3",
    },
  });

  store.dispatch({
    type: "bugRemoved",
    payload: {
      id: 1,
    },
  });
  return (
    <div className="App">
      <h1>First Redux</h1>
    </div>
  );
}

export default App;
