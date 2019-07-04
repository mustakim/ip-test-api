import { migrationRoutes } from './migrationRoutes';
import { authRoutes } from './authRoutes';
import { userRoutes } from './userRoutes';
import { testRoutes } from './testRoutes';

export const apiRoutes = [migrationRoutes, authRoutes, userRoutes, testRoutes];
