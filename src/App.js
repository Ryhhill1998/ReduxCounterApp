import './App.css';
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";

import {useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount, reset} from "./features/counter/counterSlice";
import {useState} from "react";

const App = () => {

    const dispatch = useDispatch();

    const [addValue, setAddValue] = useState(0);

    const handleInputChange = ({target}) => setAddValue(target.value);

    const addInputAmount = () => dispatch(incrementByAmount(+addValue || 0));

    const resetAll = () => {
        dispatch(reset());
        setAddValue(0);
    }

    return (
        <div className="App">
            <Counter/>

            <div>
                <Button description="Increment" handleClick={() => dispatch(increment())} />
                <Button description="Decrement" handleClick={() => dispatch(decrement())} />
            </div>

            <input type="text" value={addValue} onChange={handleInputChange} />

            <div>
                <Button description="Add" handleClick={addInputAmount} />
                <Button description="Reset" handleClick={resetAll} />
            </div>
        </div>
    );
}

export default App;
