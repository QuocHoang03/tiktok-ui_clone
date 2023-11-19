import config from "../config";

// Layouts
import { HeaderOnly } from "../components/Layout";

// Page
import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
// Public routes
const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.Profile,
    component: Profile,
  },
  {
    path: config.routes.Upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.Search,
    component: Search,
    layout: null,
  },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
