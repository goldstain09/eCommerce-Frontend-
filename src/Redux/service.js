import axios from "axios";

export const createUser = async (data) => {
  try {
    const res = await axios.post("/user/create", data);
    return res;
  } catch (error) {
    throw Error('Unable to create your account at this time! Please try again after sometime!');
  };
};

export const verifyUser = async (data) => {
  try {
    const resp = await axios.get("/user/verify", {
      headers: {
        Authorization: `Bearer ${data}`,
      },
    });
    return resp.data;
  } catch (error) {
    throw Error('Unable to fetch data! Please Retry!');
  };
};

export const loginUser = async (data) => {
  try {
    const resp = await axios.post("/user/login", data);
    // console.log(resp.data);
    return resp.data;
  } catch (error) {
    throw Error('Something went wrong while Loggining into your account! Please try again after sometime!');
  };
};

export const editUser = async (data) => {
  try {
    const resp = await axios.post("/user/edit", data);
    // console.log(resp.data);
    return resp.data;
  } catch (error) {
    throw Error('Something went wrong while editing your Personal info! Please try again after sometime!');
  };
};

// products

export const getAllProductsData = async () => {
  try {
    const resp = await axios.get("/productsApi/allProducts");
    return resp.data;
  } catch (error) {
    throw Error("Unable to fetch Product's Data! Please try again after sometime!");
  };
};

export const getOneProductsData = async (data) => {
  try {
    const resp = await axios.get(`/productsApi/oneProduct?id=${data}`);
    return resp.data;
  } catch (error) {
    throw Error("Unable to fetch Product Data! Please try again after sometime!");
  };
};

// add to cart
export const addToCart = async (data) => {
  try {
    const resp = await axios.post("/user/addtocart" , data);
    return resp.data;
  } catch (error) {
    throw Error('Something went wrong while adding this product to your cart! Please try again after sometime!');
  };
};;

//remove from cart
export const removeFromCart = async(data) => {
  try {
    const resp = await axios.post("/user/removefromcart",data);
    return resp.data;
  } catch (error) {
    throw Error('Something went wrong while removing this product from your cart! Please try again after sometime!');
  };
};


// set quantity
export const setQuantityy = async(data) => {
   try {
    const resp = await axios.post("/user/cartproductquantityset", data);
    return resp.data;
   } catch (error) {
    throw Error('Something went wrong while editing quantity of this product! Please try again after sometime!');
   };
};


// add address
export const addAddress = async(data) => {
   try {
    const resp = await axios.post("/user/addaddress", data);
    return resp.data;
   } catch (error) {
    throw Error('Something went wrong while adding your address! Please try again after sometime!');
   };
};

// place order
export const placeOrder = async(data) => {
   try {
    const resp = await axios.post("/user/placeorder", data);
    return resp.data;
   } catch (error) {
    throw Error('Something went wrong while placing your order! Please try again after sometime!');
   };
};

// getting seller shop data
export const getSellerShopData = async(data) => {
   try {
    const resp = await axios.post("/user/sellerShop", data);
    return resp.data;
   } catch (error) {
    throw Error("Unable to fetch Seller's Shop Data! Please try again after sometime!");
   };
};

// getting seller shop data
export const followSeller = async(data) => {
   try {
    const resp = await axios.post("/seller/follow", data);
    return resp.data;
   } catch (error) {
    throw Error('Something went wrong while Following this Shop! Please try again after sometime!');
   };
};

// getting seller shop data
export const unfollowSeller = async(data) => {
   try {
    const resp = await axios.post("/seller/unfollow", data);
    return resp.data;
   } catch (error) {
    throw Error('Something went wrong while Unfollowing this Shop! Please try again after sometime!');
   };
};