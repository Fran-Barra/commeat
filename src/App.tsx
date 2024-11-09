import './App.css'
import StoreItemCard from "./component/common/StoreItemCard";
import Flour from "./assets/Sample/flour.png";

function App() {
  return (
    <>
        <StoreItemCard item={{name: "Harina", price: 1000, img: Flour}}/>
    </>
  )
}

export default App
