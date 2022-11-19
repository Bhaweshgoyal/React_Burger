import './App.css';
import CreateBurger from './Burger/CreateBurger';
import { BurgerComponentEnum } from './Resouces';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='App'>
        <CreateBurger
      burgerStack = {[
          BurgerComponentEnum.LATTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.CHEESE,
          BurgerComponentEnum.LATTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.TOMATOES,
      ]}
      />
    </div>
  );
}

export default App;
