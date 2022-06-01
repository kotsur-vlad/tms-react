import { authInterceptor } from './auth';
import { notAuthInterceptor } from './nonAuth';

export const interceptors = [authInterceptor, notAuthInterceptor];
