import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { BaseButtonProps } from './Button'
import { ButtonSize } from './Button';

const defaultProps = {
  onClick: jest.fn()
}

const testProps: BaseButtonProps = {
  btnType: 'danger',
  size: 'lg',
  className: 'myclass'
}

const disableProps: BaseButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe("Button 组件测试", () => {
  it("渲染正确的 default Button", () => {
    const wrapper = render(<Button {...defaultProps}>good</Button>)
    const element = wrapper.getByText('good')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it("渲染不同 props 的 Button", () => {
    const wrapper = render(<Button {...testProps}>different props</Button>)
    const element = wrapper.getByText('different props')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-danger btn-lg myclass')
  })

  it("渲染 Link Button 且存在 href 属性", () => {
    const wrapper = render(<Button btnType="link" target="_blank" href="https://fishbone.live">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })

  it("渲染 Disabled Button 及其点击事件是否触发", () => {
    const wrapper = render(<Button {...disableProps}>Disabled</Button>)
    const element = wrapper.getByText('Disabled') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disableProps.onClick).not.toHaveBeenCalled()
  })
})