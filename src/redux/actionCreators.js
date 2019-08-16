import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  getBooksRequest: null,
  getBooksSuccess: ['books'],
  getBooksFailure: null,

  getUsersRequest: null,
  getUsersSuccess: ['users'],
  getUsersFailure: null,
});

export default Creators;
