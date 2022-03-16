//action
const createActionName = (actionName) => `app/card/${actionName}`;
const UPDATE_SEARCHTERM = createActionName('UPDATE_SEARCHTERM');

//action creator
export const updateSearchTerm = (payload) => ({type: UPDATE_SEARCHTERM, payload});

const searchTermReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHTERM:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchTermReducer;
