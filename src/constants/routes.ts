export const DASHBOARD = '/';
export const LOGIN = '/login';
export const SIGN_UP = '/signup';
export const PROFILE = '/p/:username';
export const NOT_FOUND = '/not-found';
/*
If you want to make it a little more type-safe (optional but clean), you can do this:

export const ROUTES = {
  DASHBOARD: '/',
  LOGIN: '/login',
  SIGN_UP: '/signup',
  PROFILE: '/p/:username',
  NOT_FOUND: '/not-found',
} as const;

export type RouteKey = keyof typeof ROUTES;


That way, you can safely reference routes like:

import { ROUTES } from '../constants/routes';

navigate(ROUTES.LOGIN);
*/