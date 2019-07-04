import * as express from 'express';

// set your controller name
import { testController as controller } from '../controllers';

const Routes = express.Router();

// set your routerendpoint
const routeName = 'test';

// change router name
export const testRoutes = Routes;

Routes.route(`/${routeName}/getIp`).get(controller.getIp);

// Helper.restApiPlaceHolder(Routes, controller, routeName);
