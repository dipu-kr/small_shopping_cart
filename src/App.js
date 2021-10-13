import React ,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket'
import data from './data';
function App() {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (products) =>{
          const exist = cartItems.find((x) => x.id === products.id);
          if(exist){
            setCartItems(
                 cartItems.map((x) =>
                   x.id === products.id ? {...exist, qty: exist.qty + 1} : x
                 
                 )
            )
          }else{
            setCartItems([...cartItems, {...products, qty: 1}]);
          }
    };

    const onRemove = (products) => {
      const exist = cartItems.find((x) => x.id === products.id);
      if(exist.qty === 1){
           setCartItems(cartItems.filter((x) => x.id !== products.id));
      }else{
        setCartItems(
          cartItems.map((x) => x.id === products.id ? {...exist, qty: exist.qty - 1} : x)
        );
      }
    }
  return (
    <div>
        <Header countCartItems={cartItems.length}/>
        <div className="app_div">
           <Main products={products} onAdd={onAdd}/>
           <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
        </div>
    </div>
    
  );
}

export default App;
