import axios from "axios";


class ProductService{
    static getProducts                = (cat,limit)   =>cat?axios.get(`/products/category/${cat}`):axios.get(`/products?skip=70&limit=${limit}`)
    static getSingleProduct           = id            =>axios.get(`/products/${id}`)
    static getSearchProducts          = search        =>axios.get(`/products/search?q=${search}`)
}

export default ProductService