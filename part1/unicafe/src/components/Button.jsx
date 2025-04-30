const Button = ({ text, count, onClick }) => {
    return <button onClick={onClick}>{text} {count}</button>
}

export default Button