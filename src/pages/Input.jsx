import axios from "axios";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import style from "../sass/input.module.scss";

const Input = () => {
  // * Input kısmını gizlemek için
  const [hideShow, setHideShow] = useState(false);
  const handleHideShow = () => {
    setHideShow(!hideShow);
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [image, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, image, price, amount };

    try {
      const URL = "https://65f6a31041d90c1c5e0b13c0.mockapi.io/productData";
      const res = await axios.post(URL, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className={style.hideShowBtn}>
        <button
          className={hideShow ? style.showBtn : style.hideBtn}
          onClick={handleHideShow}
        >
          {hideShow ? "Hide Input Area" : "Show Input Area"}
        </button>
      </div>
      <div className={style.container}>
        <div>
          <div className={hideShow ? style.showInput : style.hideInput}>
            <form className={style.formContainer} onSubmit={handleSubmit}>
              <label for="basic-name">Product Name</label>
              <div className="mb-3 shadow-lg">
                <input
                  placeholder="Product Name"
                  aria-label="Product Name"
                  aria-describedby="basic-addon1"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="basic-name"
                />
              </div>

              <label for="product-price">Product Price</label>
              <div className="mb-3 shadow-lg">
                <input
                  min={0}
                  type="number"
                  aria-label="Amount (to the nearest dollar)"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  id="product-price"
                />
              </div>

              <label for="product-qantity">Product Qantity</label>
              <div className="mb-3 shadow-lg">
                <input
                  min={0}
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  aria-label="Amount"
                  id="product-qantity"
                />
              </div>

              <label for="basic-url">Product Image</label>
              <div className="mb-3 shadow-lg">
                <input
                  placeholder="https://..."
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div><h4>Free shipping for purchases of $1000 or more</h4></div>
              <div className={style.addProductBtn} type="submit">

                <button type="submit">
                    {/* <p className={style.icon}><FaShoppingCart /></p> */}
                    <p className={style.submitBtn}>Add The Product</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
