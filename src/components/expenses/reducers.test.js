import {
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_REMOVE
} from './reducers';

import { CATEGORY_LOAD } from '../dashboard/reducers';

describe('expenses reducers', () => {

  it('initialize to empty array', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads expenses', () => {
    const payload = [
      {
        id: '1',
        expenses: [{}]
      },
      {
        id: '2',
        expenses: [{}]
      },
      {
        id: '3',
        expenses: [{}]
      }
    ];

    const expected = {
      '1': [{}],
      '2': [{}],
      '3': [{}]
    };

    const state = expensesByCategory({}, {
      type: CATEGORY_LOAD,
      payload
    });
    
    expect(state).toEqual(expected);
  });

  it('adds an expense ', () => {
    const expense = { 
      name: 'americano', 
      price: 3, 
      categoryId: '1' 
    };

    const categories = {
      '1':[{}]
    };

    const expected = {
      '1': [{}, expense] 
    };

    const state = expensesByCategory(categories, {
      type: EXPENSE_ADD,
      payload: expense
    });

    expect(state).toEqual(expected);
  });

  it('update an expense', () => {
    const updated = {
      name: 'white mocha',
      price: 5,
      categoryId: '1',
      id: '2'
    };

    const categories = {
      '1': [{ name: 'coffee', price: 3, categoryId: '1', id: '2' }]
    };

    const expected = {
      '1': [update]
    };

    const state = expensesByCategory(categories, {
      type: EXPENSE_UPDATE,
      payload: updated
    });

    expect(state).toEqual(expected);
  });

  it.only('removes an expense', () => {
    const deleted = {
      name: 'americano',
      id: 1,
      categoryId: '2'
    };

    const categories = {
      '2': [{ id: 2, categoryId: '1' }, deleted]
    };
   
    const expected = {
      '2': [{ id: 2, categoryId: '1' }]
    };

    const state = expensesByCategory(categories, {
      type: EXPENSE_REMOVE,
      payload: deleted
    });

    expect(state).toEqual(expected);
  });
});