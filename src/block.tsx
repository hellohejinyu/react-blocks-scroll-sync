import React, { CSSProperties, PropsWithChildren } from 'react'

interface Props {
  style?: CSSProperties
  className?: string
}

export default function Block (props: PropsWithChildren<Props>) {
  const { style, children, className, ...rest } = props
  // if not have style and className props, give a default style
  const defaultStyle = (!style && !className) ? { height: 400 } : {}
  return (
    <div
      className={`react-scroll-sync-block` + (className ? ` ${className}` : '')}
      style={{
        ...defaultStyle,
        ...style,
        overflow: 'auto',
        margin: 0,
        padding: 0,
        display: 'block'
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
