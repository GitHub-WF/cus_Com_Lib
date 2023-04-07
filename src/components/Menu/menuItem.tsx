import React from "react";
import classNames from "classnames";

interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const classes = classNames("cus_menu_item", className, {
    is_disabled: disabled,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
