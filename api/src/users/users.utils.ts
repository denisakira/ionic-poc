import { User } from './user.entity';
export const responseTransformer = (data: User | User[]) => {
  return {
    success: true,
    data,
  };
};