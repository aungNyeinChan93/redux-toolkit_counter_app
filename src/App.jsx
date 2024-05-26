import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Counter from "./Components/Counter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


function App() {
const {count} = useSelector((store)=>store.myCounter);
  console.log(count);
  
  const dispatch = useDispatch();
  
  return (
    <div className="App ">  
      <Counter count={count} dispatch={dispatch}/>
      <div className="row my-4 ">
        <div className="col-12 w-50 mx-auto text-center">
          <img
            className=" img-thumbnail w-75"
            src="https://media.licdn.com/dms/image/D4D12AQHeFYy1x6RG-w/article-cover_image-shrink_720_1280/0/1685630591968?e=2147483647&v=beta&t=gwFBdxcSj8uy9nCEoJZrUoSXP9U9aGF4x_LILzIecSw"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
