import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Meal from "./components/Meal";
import { Route, Routes } from "react-router-dom";
import MealDetails from "./components/MealDetails";

function App(): JSX.Element {
  return (
    <Routes>
      {/* <Counter/> */}
      {/* <Todo/> */}

      <Route path="/" element={<Meal />} />
      <Route path="/meal/:id" element={<MealDetails />} />
    </Routes>
  );
}

export default App;
