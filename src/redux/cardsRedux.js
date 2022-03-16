import shortid from 'shortid';
import strContains from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({cards, searchTerm}, columnId) => cards.filter((card) => card.columnId === columnId && strContains(card.title, searchTerm));
export const getFavoriteCards = ({cards, isFavorite}) => cards.filter((card) => card.isFavorite === true);

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const REMOVE_CARD = createActionName('REMOVE_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

//creators
export const addCard = (payload) => ({type: ADD_CARD, payload});
export const deleteCard = (payload) => ({type: REMOVE_CARD, payload});
export const toggleCardFavorite = (payload) => ({type: TOGGLE_CARD_FAVORITE, payload});

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, {...action.payload, id: shortid()}];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) => (card.id === action.payload ? {...card, isFavorite: !card.isFavorite} : card));
    case REMOVE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;
