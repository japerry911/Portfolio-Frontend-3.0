import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production' ? null : 'http://localhost:5000/api',
});
