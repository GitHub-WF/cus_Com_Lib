import React from 'react';
import classNames from 'classnames';

export const enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}

export const enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps> // Partial 设置属性为可选，交叉类型，获得button和anchor所有属性
const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, size, btnType, href, children, className, ...restProps } = props;
  const classes = classNames('btn', className, {
    [`btn_${btnType}`]: btnType,
    [`btn_${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  });
  if (btnType === ButtonType.Link && href) {
    return (
      <a
        className={ classes }
        href={ href }
        {...restProps}
      >
        { children }
      </a>
    )
  } else {
    return (
      <button
        className={ classes }
        disabled={ disabled }
        {...restProps}
      >
        { children }
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button;