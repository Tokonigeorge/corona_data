const UPDATE_DATA = "UPDATE_DATA";

//action to send data from component to store usinf dispatch
export function updateData(data) {
  return {
    type: UPDATE_DATA,
    data,
  };
}

//store default data as an object

const defaultData = {};

function data(state = defaultData, action) {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: action.data,
      };
  }
}

export function _data(store = {}, action) {
  return {
    data: data(store.data, action),
  };
}
