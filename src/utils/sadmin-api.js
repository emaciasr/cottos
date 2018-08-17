import axios from 'axios';
import { getJSONIdToken, API_END_POINT } from '../app.config';

export function getCotos() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_END_POINT}/sadmin/cotos`, { headers: { Authorization: `Bearer ${getJSONIdToken()}` } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

/**
 * TO Remove (Quick Fix)
 */
export const foo = '';