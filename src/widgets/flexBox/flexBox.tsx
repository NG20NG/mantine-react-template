import React, { CSSProperties, ReactNode } from "react";
import { AlignTypes, DirectionProps, JustifyTypes } from "./types";

export const Flex = React.memo((props: FlexProps) => {
  const { direction, justify, align, children, style, h, w, className } = props;
  const { p, pt, pb, pr, pl, m, mt, mb, mr, ml, gap, b, fg, o } = props;

  return (
    <div
      className={className}
      style={{
        border: b !== undefined ? `1px solid ${b}` : "none",
        display: "flex",
        gap: gap,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexGrow: fg,
        height: h,
        width: w,

        outline: o !== undefined ? `1px solid ${o}` : "none",

        paddingTop: pt !== undefined ? pt : p,
        paddingBottom: pb !== undefined ? pb : p,
        paddingRight: pr !== undefined ? pr : p,
        paddingLeft: pl !== undefined ? pl : p,

        marginTop: mt !== undefined ? mt : m,
        marginBottom: mb !== undefined ? mb : m,
        marginRight: mr !== undefined ? mr : m,
        marginLeft: ml !== undefined ? ml : m,

        ...style,
      }}
    >
      {children}
    </div>
  );
});

//
//

//
interface FlexProps {
  className?: string;
  b?: string;
  o?: string;
  justify?: JustifyTypes;
  align?: AlignTypes;
  direction?: DirectionProps;
  children: ReactNode;

  gap?: string | number;
  fg?: number;

  h?: string | number;
  w?: string | number;

  p?: string | number;
  pt?: string | number;
  pb?: string | number;
  pr?: string | number;
  pl?: string | number;

  m?: string | number;
  mt?: string | number;
  mb?: string | number;
  mr?: string | number;
  ml?: string | number;

  style?: CSSProperties;
}
