import { createActions } from 'reduxsauce';

export const {
  Types,
  Creators,
} = createActions({
  getBreedsRequest: null,
  getBreedsSuccess: ['breeds'],
  getBreedsFailure: null,

  saveBreedSelectedSuccess: ['breedSelected'],

  getImageBreedRequest: null,
  getImageBreedSuccess: ['imageBreed'],
  getImageBreedFailure: null,

  getUsersRequest: null,
  getUsersSuccess: ['users'],
  getUsersFailure: null,
});

export default Creators;
