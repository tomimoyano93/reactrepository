import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemListContainerByCategory from './components/ItemListContainerByCategory';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
// import  CartContext  from './context/CartContext';
import CartContextProvider from './context/CartContext';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
            <Switch> 
              <Route exact path='/'>
                <ItemListContainer/>
              </Route>
              <Route exact path='/categoria/:id' component={ItemListContainerByCategory}/>
              <Route exact path='/detalle/:id2' component={ItemDetailContainer}/>
              <Route exact path='/cart' component={Cart}/>
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;