import React, { CSSProperties } from "react";
interface Styles {
    block: string;
}
interface Props {
    style?: CSSProperties;
    children: any;
    classes: Styles;
    className?: string;
}
declare const _default: React.ComponentType<Pick<Props, "style" | "children" | "className"> & import("react-jss").StyledComponentProps<"block">>;
export default _default;
