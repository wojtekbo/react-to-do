import {createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains.js';

//selectors
export const getFilteredCards = ({cards, searchTerm}, columnId) => cards.filter((card) => card.columnId === columnId && strContains(card.title, searchTerm));
export const getFavoriteCards = ({cards, isFavorite}) => cards.filter((card) => card.isFavorite === true);
export const getAllLists = ({lists}) => lists;
export const getColumnsByList = ({columns}, listId) => columns.filter((column) => column.listId === listId);
export const getListById = ({lists}, listId) => lists.find((list) => list.id === listId);

// action creators
export const addList = (payload) => ({type: 'ADD_LIST', payload});
export const addColumn = (payload) => ({type: 'ADD_COLUMN', payload});
export const addCard = (payload) => ({type: 'ADD_CARD', payload});
export const toggleCardFavorite = (payload) => ({type: 'TOGGLE_CARD_FAVORITE', payload});
export const updateSearchTerm = (payload) => ({type: 'UPDATE_SEARCHTERM', payload});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {id: shortid(), ...action.payload}]};
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {id: shortid(), ...action.payload}]};
    case 'ADD_CARD':
      // console.log('ADD_CARD', action.payload);
      return {...state, cards: [...state.cards, {id: shortid(), ...action.payload}]};
    case 'TOGGLE_CARD_FAVORITE':
      return {...state, cards: state.cards.map((card) => (card.id === action.payload ? {...card, isFavorite: !card.isFavorite} : card))};
    case 'UPDATE_SEARCHTERM':
      return {...state, searchTerm: action.payload};
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
