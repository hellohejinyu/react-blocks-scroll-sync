import React, { CSSProperties, PureComponent } from "react";
import injectSheet from "react-jss";
import classNames from "classnames";

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
  style?: CSSProperties,
  children: any,
  classes: Styles,
  className?: string;
}

class Block extends PureComponent<Props, {}> {
  render() {
    const { style, children, className, classes, ...rest } = this.props;
    return <div
      className={classNames(classes.block, className, "react-scroll-sync-block")}
      style={{ margin: 0, padding: 0, display: "block", ...style }}
      {...rest}
    >
      {children}
    </div>
  }
}

export default injectSheet(styles)(Block);