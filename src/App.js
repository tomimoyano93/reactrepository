import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar/>
          <Switch> 
            <Route exact path='/'>
              <ItemListContainer/>
            </Route>
            <Route exact path='/categoria/:id' component={ItemListContainer}/>
            <Route exact path='/detalle/:id' component={ItemDetailContainer}/>
            <Route exact path='/cart' component={Cart}/>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
