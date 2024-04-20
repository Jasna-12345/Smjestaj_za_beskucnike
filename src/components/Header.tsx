//import { RouteObject } from "react-router";
import { RouteType } from "../main";

const hostName = "http://localhost:5174";

const getPathName = (url: string) => {
  return url.split(hostName)[1];
};

//Na temelju putanje određuje naziv rute 
const getRouteName = (path: RouteType["path"]) => {
  let routeName = "";
  switch (path) {
    case "/":
      routeName = "Home";
      break;
    case "/all-homeless":
      routeName = "Homeless";
      break;
    default:
      routeName = "";
  }
  return routeName;
};

//Komponenta mapira naše rute i prikazuje ih u zaglavlju 
export const Header: React.FC<{ routes: RouteType[] }> = (props) => {
  const thisUrl = getPathName(window.location.href);
  return (
    <header>
      <div className="bg-red-900 p-5">
        <h1 className="text-white font-bold">SMJEŠTAJ ZA BESKUĆNIKE</h1>
      </div>
      <nav className="bg-red-500 p-5">
        {props.routes.map((route) => (
            //Dinamički generiramo linkove temeljem ruta 
          <a
            key={route.id}
            href={route.path}
            className={`${
              route.path === thisUrl ? "bg-green-900" : "bg-red-200"
            }  p-3 rounded-md hover:bg-green-300 text-white font-bold`}
          >
            {getRouteName(route.path)}
          </a>
        ))}
      </nav>
    </header>
  );
};