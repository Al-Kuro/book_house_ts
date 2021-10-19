import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Book from "./pages/Book";
import Home from "./pages/Home";
import User from "./pages/User";
import {
  ADMIN_ROUTE,
  BOOK_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  USER_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: USER_ROUTE,
    Component: User,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: USER_ROUTE,
    Component: User,
  },
  {
    path: BOOK_ROUTE + "/:id",
    Component: Book,
  },
];
