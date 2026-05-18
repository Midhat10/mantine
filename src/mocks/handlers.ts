import { http, HttpResponse } from 'msw';
import { currencyResponse } from './response';

const baseURL = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';
export const handlers = [
  http.get(baseURL, () => {
    return HttpResponse.json(currencyResponse);
  }),
];
