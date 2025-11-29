import { create } from "zustand";

const useCart = create((set, get) => ({
  cart: [],
  product: {},
  openModal: false,
  setOpenModal: () => {
    set((state) => {
      return {
        ...state,
        openModal: !state.openModal
      };
    });
  },

  setProduct: (params) => {
    const { newProduct } = params;
    set((state) => {
      return {
        ...state,
        product: newProduct
      };
    });
  },

  addItemsToCart: (params) => {
    //console.log(params);
    const { newItem } = params;
    set((state) => {
      const newCart = [...state.cart, newItem];
      //console.log(newCart);
      return {
        ...state,
        cart: newCart
      };
    });
  },

  removeItemFromCart: (params) => {
    const { itemIndex } = params;
    set((state) => {
      const newCart = state.cart.filter((element, elementIndex) => {
        return elementIndex !== itemIndex;
      });
      return {
        ...state,
        cart: newCart
      };
    });
  },

  emptyCart: () => {
    set((state) => {
      const newCart = [];
      return {
        ...state,
        cart: newCart
      };
    });
  }
}));
export default useCart;

// removeItemsFromCart: () => {
//   // console.log(params);
//   // const { itemIndex } = params;
//   set((state) => {
//     const newCart = state.cart.filter((element, elementIndex) => {
//       console.log(elementIndex);
//       console.log(state.cart);
//       return elementIndex;
//     });
//     return {
//       ...state,
//       cart: newCart
//     };
//   });
// },
