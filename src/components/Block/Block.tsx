import * as React from "react";
import injectSheet from "react-jss";
var classNames = require("classnames");

const styles = {
    block: {
        height: 400,
        overflow: "auto"
    }
}

interface Props {
    style,
    children,
    classes,
    className
}

@injectSheet(styles)
class Block extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

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

export default Block;