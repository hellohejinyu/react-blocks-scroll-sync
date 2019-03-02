import React, { CSSProperties, PureComponent } from "react";
import cn from "classnames";

interface Styles {
  block: string;
}

const styles = {
  block: {
    height: 400,
    overflow: "auto"
  }
}

interface Props {
  style?: CSSProperties
  children: any
  className?: string
}

class Block extends PureComponent<Props, {}> {
  render() {
    const { style, children, className, ...rest } = this.props;
    // if not have style and className props, give a default style
    const defaultStyle = (!style && !className) ? { height: 400 } : {}
    return <div
      className={cn(className, "react-scroll-sync-block")}
      style={{
        ...defaultStyle,
        overflow: 'auto',
        margin: 0,
        padding: 0,
        display: "block",
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  }
}

export default Block;