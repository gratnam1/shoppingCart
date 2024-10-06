import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from './store/CartContext'
import { UserProgressContextProvider } from "./store/userProgress";

function App() {
  const mealsUrl = "http://localhost:3000/meals"
  return (
    <UserProgressContextProvider>
      <CartContextProvider>

        <Header />
        <Meals url={mealsUrl} />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
