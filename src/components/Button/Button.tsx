import classNames from 'classnames'
import React, { FC } from 'react'

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'default' | 'primary' | 'danger' | 'link'

interface IBaseButtonProps {
  /**
   * 自定义样式名称
   */
  className?: string;
  /**
   * 是否可以点击
   */
  disabled?: boolean;
  /**
   * 按钮大小
   */
  size?: ButtonSize;
  /**
   * 按钮类型
   */
  btnType?: ButtonType;
  /**
   * Link Button href 属性
   */
  href?: string,
  children: React.ReactNode;
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

type AnchroButtonProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type BaseButtonProps = Partial<NativeButtonProps & AnchroButtonProps>

const Button: FC<BaseButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    href,
    children,
    ...resetProps
  } = props
  
  const _class = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a
        className={_class}
        href={href}
        {...resetProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={_class}
        disabled={disabled}
        {...resetProps}
      >
        {children}
      </button>
    )
  } 
}

Button.defaultProps = {
  disabled: false,
  /**
   Checks if the button should be disabled
  */
  btnType: 'default'
}

export default Button

