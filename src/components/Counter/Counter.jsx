import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.counter.value);

    return <h1>The count is: {count}</h1>;
}

export default Counter;