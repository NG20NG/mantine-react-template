//
//
//
//
//
//
//
//
//

import React from "react";
import { CSSProperties, ReactNode } from "react";

export const Grid = React.memo((props: GridProps) => {
  const { children, style, h, w, gridTemplateColumns, gridTemplateRows } =
    props;
  const { p, pt, pb, pr, pl, m, mt, mb, mr, ml, gap, b, fg } = props;
  return (
    <div
      style={{
        border: b !== undefined ? `1px solid ${b}` : "none",
        display: "grid",
        gridTemplateColumns,
        gridTemplateRows,
        gap: gap,
        flexGrow: fg,
        height: h,
        width: w,

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
interface GridProps {
  gridTemplateColumns?: string;
  gridTemplateRows?: string;

  b?: string;
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
