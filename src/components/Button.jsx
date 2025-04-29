function Button() {
    const handleClick = () => {
        console.log("Przycisk został kliknięty!");
    };

    return <div><button onClick={handleClick}>Kliknij mnie</button></div>


}

export default Button;