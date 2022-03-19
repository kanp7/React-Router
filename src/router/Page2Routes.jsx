import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page２Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    // :以降をURLパラメーターとして扱う
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
];
