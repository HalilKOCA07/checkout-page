import { Ripple, initTWE } from "tw-elements";
import { useApiContext } from "../context/ProductsApi";
import axios from "axios";
initTWE({ Ripple });

const Products = () => {
  const { getProducts, setGetProducts, mockApiProducts } = useApiContext();

  //*SUBTOTAL PRICE LIST
  let subtotal =0;
  let shipping =0;
  let tax =0;

  getProducts.map(({price, amount}) => {
    subtotal += price*0.8*amount;
    tax += price*0.2;
  })
 
  //* REMOVE FONCTION
  const handleDeleteProduct = async (id) => {
    try{
       const URL =  `https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData/${id}`;
       await axios.delete(URL)
       alert(":( Ürün silme işlemi başarılı :(")
    }catch(error) {
      alert("Ürün silme sırasında bir hata oluştu")
    }
    mockApiProducts()
  }

  //* INCREASE FONCTION
  const handleInc = async (id, amount) => {
    try{
          const URL =  `https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData/${id}`;
          await axios.put(URL,{amount: Number(amount)+1})
    }catch(error) {
      alert("Ürün arttırma sırasında bir hata oluştu :(")
    }
      mockApiProducts()
  }

  //* DECREASE FONCTION
  const handleDec = async (id, amount) => {
    try{
      const URL =  `https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData/${id}`;
      if(amount > 1){
              await axios.put(URL, {amount: Number(amount) - 1})
      }else{
          alert("ürün miktarı birden az olamaz")
      }
    }catch(error){
      alert("ürün azaltma sırasında bir hata oluştu")
    }
    mockApiProducts()
  }

  console.log(getProducts);
  return (
    <div>
      {getProducts?.length ? (
        getProducts.map(({ name, price, amount, image, id }) => {
        return(
          <div key={id} className="block rounded-lg bg-blue-200 shadow-lg w-1/3 m-auto mt-6 text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
            <div class="text-3xl font-bold  border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10">
              {name}
            </div>
            <div className="flex p-3 justify-evenly">
              <div class="p-6">
                <span className="text-red-700 font-bold text-2xl">
                  $ {(price * 0.8).toFixed(2)}
                </span>{" "}
                <span className="line-through">$ {(price * 1).toFixed(2)}</span>
                <div class="mb-4 text-base flex justify-center m-6 gap-4">
                  <button className=" bg-red-500 px-3 rounded-lg text-white text-2xl font-extrabold"
                  onClick={() => handleDec(id, amount)}>
                    -
                  </button>
                  <p className="text-2xl font-extrabold">[ {amount} ]</p>
                  <button className=" bg-green-500 px-3 rounded-lg text-white text-2xl font-extrabold"
                  onClick={() => handleInc(id, amount)}>
                    +
                  </button>
                </div>
                <div className="mt-10">
                  <span className=" font-bold">Total Price:</span>
                  <span>$ {(price * 0.8 * amount).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-center ">
                <img className="w-[200px] h-[200px]" src={image} alt={name} />
              </div>
            </div>

            <div class="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300 text-3xl font-bold">
              <button
                type="button"
                className="bg-red-500 px-4 py-1 rounded-lg text-white hover:bg-red-600"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                onClick={() => handleDeleteProduct(id)}
              >
                Remove
              </button>
            </div>
          </div>
        )})
      ) : (
        <div>
          <h1>liste boş</h1>
        </div>
      )}
      <div className="subtotalPrice w-1/3 m-auto mt-8">
        <div className="flex justify-between mt-3 border-b-2 px-3"><span>Subtotal :</span><span>$ {(subtotal).toFixed(2)}</span></div>
        <div className="flex justify-between mt-3 border-b-2 px-3"><span>Tax :</span><span>$ {(tax).toFixed(2)}</span></div>
        <div className="flex justify-between mt-3 border-b-2 px-3"><span>Shipping :</span><span>$ {subtotal < 1000 ? shipping = 150 : shipping}</span></div>
        <div className="flex justify-between mt-3 border-b-2 px-3"><span>Total Paying</span><span>$ {(subtotal+tax+shipping).toFixed(2)}</span></div>
      </div>
    </div>
  );
};

export default Products;
