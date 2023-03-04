import { useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount} from "../../features/counter/counterSlice.js";

const Button = ({description}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (description === "Increment") {
            dispatch(increment());
        } else if (description === "Decrement") {
            dispatch(decrement());
        } else if (description === "Increment by 5") {
            dispatch(incrementByAmount(5));
        }
    }

    return <button onClick={handleClick}>{description}</button>;
}

export default Button;