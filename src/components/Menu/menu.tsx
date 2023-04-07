import React, { createContext } from "react";
import classNames from "classnames";

type SelectCallback = (selectIndex: number) => void;
type MenuMode = "horizontal" | "vertical";
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex } = props;
  const classes = classNames("cus_menu", className, {
    menu_vertical: mode === "vertical",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
