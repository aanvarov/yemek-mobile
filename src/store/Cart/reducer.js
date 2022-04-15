import * as types from './actionTypes';

const initialState = {
  foods: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADDED_TO_CART: {
      // check if food is already in cart update counter
      const food = action.payload.food;
      const index = state.foods.findIndex(f => f._id === food._id);
      if (index === -1) {
        // food is not in cart yet
        return Object.assign({}, state, {
          foods: [...state.foods, food],
        });
      } else {
        // food is already in cart
        const foods = [...state.foods];
        foods[index].counter += food.counter;
        return Object.assign({}, state, {
          foods,
        });
      }
    }
    // get total count of foods and return count
    case types.GET_TOTAL_COUNT: {
      let totalCount = 0;
      state.foods.forEach(food => {
        totalCount += food.counter;
      });
      return Object.assign({}, state, {
        totalCount,
      });
    }
    // update counter of food in cart by id
    case types.UPDATE_COUNTER: {
      const { id, counter } = action.payload;
      const foods = state.foods.map(food => {
        if (food._id === id) {
          return { ...food, counter };
        }
        return food;
      });
      return Object.assign({}, state, {
        foods,
      });
    }
    case types.CLEAR_CART: {
      return Object.assign({}, state, {
        foods: [],
      });
    }
    default: {
      return state;
    }
  }
};
