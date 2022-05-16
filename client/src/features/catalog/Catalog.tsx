import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<Product[]>(`http://localhost:5000/api/Products`)
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <h3>Loading...</h3>

    if (!products) return <h3>Products not found</h3>

    return <ProductList products={products} />
}
