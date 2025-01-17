import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://zh3cusz9zh.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://1crvlfyexi.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'http://zheromskyv-cart-api-develop.eu-west-1.elasticbeanstalk.com/api',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: true,
  },
};
