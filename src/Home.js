import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const [products, setProducts] =useState([]);
    const navigate = useNavigate();
      const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/fetch-products");
      console.log("Response from backend:", response.data);
      setProducts(response.data.data); // or response.data depending on backend
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  },[]);
    return(
        <>
             <div className="App">
         <div className="card-container">
          <table>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Product Desc</th>
              <th>Price</th>
              <th>Actions</th>
              </tr>
            {products.map((product, index) => (
              <tr>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>{product.productCode}</td>
                <td>{product.productDesc}</td>
                <td>{product.productPrice}</td>
                <td>
                  <button onClick={()=>navigate(`/pay/${product.productPrice}/${product._id}`)}>Buy</button>
                </td>
              </tr>
           ))} 
          </table><br></br><br></br>
          </div>
      </div>
        </>
    )
}
export default Home;