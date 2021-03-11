import { GET_FILES } from '../actionTypes';
import { fetchMethod } from '../thunkUtils';

export const getFilesAC = (fileInfo) => ({ type: GET_FILES, payload: { fileInfo } });

export const getFilesThunk = (schId) => async (dispatch) => {
  try {
    const response = await fetchMethod({
      path: 'http://localhost:3100/upload/filesch',
      method: 'post',
      body: { schId }
    });
    if (!response.error) {

      const fileInfo = response;

      dispatch(getFilesAC(fileInfo));

    }
  } catch (err) {
    console.log('Err', err);
  }
}
