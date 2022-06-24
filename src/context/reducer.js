export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS : "SET_FOOD_ITEMS",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    
    case actionType.SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems: action.foodItems,
      };

    default:
      return state;
  }
};

export default reducer;

// export const initialState = {
//   cart: null,
//   total: null,
// };

// export const actionType = {
//   SET_CART: "SET_CART",
//   SET_TOTAL: "SET_TOTAL",
// };

// const reducer = (state, action) => {
//   console.log(action);

//   switch (action.type) {
//     case actionType.SET_CART:
//       return {
//         ...state,
//         cart: action.cart,
//       };

//     case actionType.SET_TOTAL:
//       return {
//         ...state,
//         total: action.total,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
