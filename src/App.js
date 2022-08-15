import { useSelector } from "react-redux";

function App() {
  const store = useSelector((store) => store);
  console.log(store);
  return <h1>Hello</h1>;
}

export default App;
