import Axios from 'axios';
import { cloneDeep } from 'lodash';

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async config => {
  const clonedConfig = cloneDeep(config);
  const token = 'sample-token';

  clonedConfig.headers.common = {
    Authorization: `Bearer ${token}`,
  };

  return clonedConfig;
});

export default axiosInstance;
