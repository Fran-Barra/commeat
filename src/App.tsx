import './App.css'
import StoreItemCard from "./component/common/StoreItemCard";
import Flour from "./assets/Sample/flour.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const notify = () => toast("Ingredientes agregados al carrito");

  return (
      <>
          <button onClick={notify}>Notify!</button>
          <StoreItemCard size={'small'} item={{name: "Harina", price: 1000, img: Flour}}/>
      </>
  )
}

export default App
