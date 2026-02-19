import axios from "axios";
import { useState, useEffect } from "react";

function SellerDashboard(){
    const [productName, setProductName] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productCode, setProductCode] = useState(0);
    const [products, setProducts] =useState([]);

      const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/fetch-products");
      console.log("Response from backend:", response.data);
      setProducts(response.data.data); // or response.data depending on backend
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

//   const fetchProductById = async(id) =>{
//     console.log("the selected product id is: ", id);
//     try{
//       const response = await axios.get("http://localhost:8080/fetch-by-id",
//         {_id:id}
//       );
//       console.log(response)
//       alert("product deleted successfully");
//     }
//     catch(err){
//       alert("An error occured");
//     }
//   }
 useEffect(() => {
  fetchProducts();
},[]);

  const addProduct = async(e)=>{
    console.log("sending the request to backend");
    e.preventDefault();
    const savedToken = localStorage.getItem("userToken");
    const response = await axios.post(
      "http://localhost:8080/add-product",
      {productName:productName,productCode:productCode, 
      productDesc:productDesc,productPrice:productPrice
    },
    {headers:{authorization:savedToken}}
    )
    alert(response.data.message);
    console.log("the response from server is: ", response);
  }
    return(
        <>
        <div className="App">
        <label>Product Name</label><br></br>
        <input
        type='text' name='productName' placeholder='Laptop'
        value={productName} onChange={(e)=> setProductName(e.target.value)}
        >
        </input><br></br><br></br>

        <label>Product Description</label><br></br>
        <input
        type='text' name='productDesc' placeholder='e.g this is hp brand'
        value={productDesc} onChange={(e)=> setProductDesc(e.target.value)}
        >
        </input><br></br><br></br>
        <label>Product Price</label><br></br>
        <input
        type='number' name='productPrice' placeholder='100'
        value={productPrice} onChange={(e)=> setProductPrice(e.target.value)}
        >
        </input><br></br><br></br>
        <label>Product Code</label><br></br>
        <input
        type='text' name='productCode' placeholder='74646'
        value={productCode} onChange={(e)=> setProductCode(e.target.value)}
        >
        </input><br></br><br></br>
        <button onClick={addProduct}>Add Product</button><br></br><br></br>
        {/* <button onClick={fetchProducts}>Fetch Products</button><br></br><br></br> */}

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
                  <button>View</button>
                  <button>update</button>
                  <button>delete</button>
                </td>
              </tr>
           ))} 
          </table><br></br><br></br>
          </div>
      </div>
    </div>
        </>
    )
}
export default SellerDashboard;