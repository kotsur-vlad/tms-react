import type { TODO_ANY } from '../any';

export type UserModel = {
  id: TODO_ANY; // clarify id type (number or string)
  username: string;
  email: string;
};
