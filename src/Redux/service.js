import axios from "axios";

export const createUser = async (data) => {
  try {
    const res = await axios.post("http://localhost:8080/user/create", data);
    return res;
  } catch (error) {
    return error;
  }
};

export const verifyUser = async (data) => {
  try {
    const resp = await axios.get("http://localhost:8080/user/verify", {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (data) => {
  try {
    const resp = await axios.post("http://localhost:8080/user/login", data);
    // console.log(resp.data);
    return resp.data;
  } catch (error) {
    return error;
  }
};

export const editUser = async (data) => {
  try {
    const resp = await axios.post("http://localhost:8080/user/edit", data);
    // console.log(resp.data);
    return resp.data;
  } catch (error) {
    return error;
  }
};

// products

export const getAllProductsData = async () => {
  try {
    const resp = await axios.get("http://localhost:8080/productsApi/allProducts");
    return resp.data;
  } catch (error) {
    return error;
  }
}

export const getOneProductsData = async (data) => {
  try {
    const resp = await axios.get(`http://localhost:8080/productsApi/oneProduct?id=${data}`);
    return resp.data;
  } catch (error) {
    return error;
  }
}

// add to cart
export const addToCart = async (data) => {
  try {
    const resp = await axios.post("http://localhost:8080/user/addtocart" , data);
    return resp.data;
  } catch (error) {
    return error;
  }
}

//remove from cart
export const removeFromCart = async(data) => {
  try {
    const resp = await axios.post("http://localhost:8080/user/removefromcart",data);
    return resp.data;
  } catch (error) {
    return error;
  }
}


// set quantity
export const setQuantityy = async(data) => {
   try {
    const resp = await axios.post("http://localhost:8080/user/cartproductquantityset", data);
    return resp.data;
   } catch (error) {
    return error;
   }
}


// add address
export const addAddress = async(data) => {
   try {
    const resp = await axios.post("http://localhost:8080/user/addaddress", data);
    return resp.data;
   } catch (error) {
    return error;
   }
}

// place order
export const placeOrder = async(data) => {
   try {
    const resp = await axios.post("http://localhost:8080/user/placeorder", data);
    return resp.data;
   } catch (error) {
    return error;
   }
}