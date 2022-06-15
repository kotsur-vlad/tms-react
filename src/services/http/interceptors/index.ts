import { authInterceptor } from './auth';
import { nonAuthInterceptor } from './nonAuth';

export const interceptors = [authInterceptor, nonAuthInterceptor];
