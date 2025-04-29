function ProductList() {
    const products = [
        { id: 1, name: "Laptoop" },
        { id: 2, name: "Telefon" },
        { id: 3, name: "Tablet" }
    ];

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.name}</li>
            ))}
        </ul>
    );
}

export default ProductList;