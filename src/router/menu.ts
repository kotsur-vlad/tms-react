import type { MenuModel } from './types';

export const menuItems: MenuModel[] = [
  {
    name: 'home',
    title: 'Home',
    path: '/',
    private: false,
  },
  {
    name: 'posts',
    title: 'Posts',
    path: 'posts',
    private: true,
  },
  {
    name: 'login',
    title: 'Login',
    path: 'login',
    private: false,
  },
  {
    name: 'register',
    title: 'Register',
    path: 'register',
    private: false,
  },
  {
    name: 'resetPass',
    title: 'Reset Password',
    path: 'reset-password',
    private: false,
  },
];
