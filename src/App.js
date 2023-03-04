import './App.css';
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";

const App = () => {
  return (
    <div className="App">
        <Counter />

        <div>
            <Button description="Increment" />
            <Button description="Decrement" />
            <Button description="Increment by 5" />
        </div>
    </div>
  );
}

export default App;
