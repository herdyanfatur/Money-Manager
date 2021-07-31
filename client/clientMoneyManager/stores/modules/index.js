import {user} from './user';
import {app} from './app';

export const reducers = {
  app: app.reducer,
  user: user.reducer,
};

/**
 * Root actions.
 */
export const actions = {
  app: app.actions,
  user: user.actions,
};

export {app, user};
