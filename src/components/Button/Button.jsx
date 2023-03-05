
const Button = ({description, handleClick}) => {
    return <button onClick={handleClick}>{description}</button>;
}

export default Button;