import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE } from './reducers';
import data from '../../services/categories-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = category => {
  category.timestamp = new Date();
  category.id = shortid.generate();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});