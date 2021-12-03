import react, { useState, useEffect } from 'react';
import './App.scss';
import MenuList from './components/MenuList';
import Panel from './components/Panel';
import CartList from './components/CartList';

function App() {

  const [menuItems, changeMenuItems] = useState([
    {
      id: 1,
      name: 'French Fries with Ketchup',
      price: 223,
      image: 'plate__french-fries.png',
      alt: 'French Fries',
      isAdded: false
    },
    {
      id: 2,
      name: 'Salmon and Vegetables',
      price: 512,
      image: 'plate__salmon-vegetables.png',
      alt: 'Salmon and Vegetables',
      isAdded: false
    },
    {
      id: 3,
      name: 'Spaghetti Meat Sauce',
      price: 782,
      image: 'plate__spaghetti-meat-sauce.png',
      alt: 'Spaghetti with Meat Sauce',
      isAdded: false
    },
    {
      id: 4,
      name: 'Bacon, Eggs, and Toast',
      price: 599,
      image: 'plate__bacon-eggs.png',
      alt: 'Bacon, Eggs, and Toast',
      isAdded: false
    },
    {
      id: 5,
      name: 'Chicken Salad with Parmesan',
      price: 698,
      image: 'plate__chicken-salad.png',
      alt: 'Chicken Salad with Parmesan',
      isAdded: false
    },
    {
      id: 6,
      name: 'Fish Sticks and Fries',
      price: 634,
      image: 'plate__fish-sticks-fries.png',
      alt: 'Fish Sticks and Fries',
      isAdded: false
    }
  ]);

  const [cart, changeCart] = useState([]);
  const [total, handleTotal] = useState({
    subTotal: 0,
    tax: 0,
    total: 0
  });

  useEffect(() => {
    let copy = Object.assign({}, total);
    const taxProcent = 0.0975;
    if (cart.length > 0) {
      let st = 0;
      cart.map((item) => {
        st += Math.round(item.price * item.count * 100) / 100;
      });
      copy.subTotal = Math.round(st * 100) / 100;;
      copy.tax = Math.round(copy.subTotal * taxProcent * 100) / 100;
      copy.total = Math.round((copy.subTotal + copy.tax) * 100) / 100;
      handleTotal(copy);
    }
    updateDocumentTitle();
  }, [cart])

  const resetTotal = () => {
    let copy = Object.assign({}, total);
    copy.subTotal = 0;
    copy.tax = 0;
    copy.total = 0;
    handleTotal(copy);
  }

  const addItemToCart = (itemId, price) => {
    let copy = [...cart];
    let item = {
      id: itemId,
      price: price,
      count: 1
    }
    copy.push(item);
    changeCart(copy);
  }

  const changeCartCount = (itemId, step) => {
    let copy = [...cart];
    let itemIndex = copy.findIndex(el => el.id === itemId);
    if (copy[itemIndex].count === 1 && step < 0) {
      resetTotal();
      copy = copy.filter(el => el.id != itemId);
      changeCart(copy);
    } else {
      copy[itemIndex].count += step;
      changeCart(copy);
    }
  }

  const updateDocumentTitle = () => {
    document.title = `Total duty: $${total.total}`;
  }

  return (
    <div className="wrapper">
      <Panel title="To Go Menu">
        <MenuList items={menuItems} cart={cart} handleClick={addItemToCart} />
      </Panel>
      <Panel title="Your Cart">
        <CartList items={cart} allItems={menuItems} handleCount={changeCartCount} total={total} />
      </Panel>
    </div>
  );
}

export default App;
