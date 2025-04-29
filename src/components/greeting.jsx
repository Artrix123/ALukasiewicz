function Greeting({ name, role }) {
    const isAdmin = false;

    return (
        <div>
            <h1>cześć: {name}</h1>
            <p>Rola: {role.toUpperCase()}</p>
            <p>Dziś jest: {new Date().toLocaleDateString()}</p>
        </div>
    );
}

export default Greeting;