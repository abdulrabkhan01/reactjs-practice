import './App.css';
import Item from './components/Item.js';
function App() {
  const items = [
    { 
      id: 1,
      label: 'Honda Activa',
      date: new Date(2022,1,20),
      price: 10000
    },
    { 
      id: 1,
      label: 'Aviator',
      date: new Date(2022,2,20),
      price: 20000
    }
  ];
  return ( 
    <div>
      <h1> Hello Ark </h1>
      <Item
       label={items[0].label}
       date={items[0].date}
       price={items[0].price}
       ></Item>
       <Item
       label={items[1].label}
       date={items[1].date}
       price={items[1].price}
       ></Item>
    </div>
  );
}

export default App;
