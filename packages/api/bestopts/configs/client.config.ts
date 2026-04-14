import type { CreateClientConfig } from '../clients/client1/client.gen';
import { client } from '../clients/client1/client.gen';


client.interceptors.request.use((request, options) => {
    // request.headers.set('Authorization', 'Bearer <my_token>'); 
    return request;
  });


client.interceptors.response.use((response, options) => {
    // do something
    return response;
  });

  export const createClientConfig: CreateClientConfig = (config) => ({
    ...config,
    baseUrl: 'https://bestopts.net',
  });
