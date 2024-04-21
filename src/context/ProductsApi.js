import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//1.adım mockApi den data için oluşturulan context
export const ProductsApiContext = createContext()

//2.adım Api context için sarmalama işlemi
const ApiProvider = (props) => {
    const [getProducts, setGetProducts] = useState([{ 
        // api den gelen veriyi tutmak için oluşturulan useState JSON 
        name: "",
        price: 0,
        amount: 0,
        image: "",
        id: ""
    }])

    // api den veri çekme
    const mockApiProducts = async () => {
        const URL = "https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData"
        const res = await axios(URL)
        console.log(res.data)
        setGetProducts(res.data)
    }
    useEffect(() =>{
        mockApiProducts()
    }, [])

    const values = {getProducts, setGetProducts, mockApiProducts}
    return(
        <ProductsApiContext.Provider value={values}>
           {props.children}
        </ProductsApiContext.Provider>
    )
}

//3.adım Consuming işlemini birleştirmek için hazırlanan bir custom hook
export const useApiContext = () => {
    return useContext(ProductsApiContext)
}

export default ApiProvider