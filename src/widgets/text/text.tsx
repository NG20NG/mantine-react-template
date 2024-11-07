//
//
//
//
//
//
//
//
//
//

import { CSSProperties, ReactNode } from "react";

//
export const Text = (props: TextProps) => {
  const { h, w, size, children, style, className } = props;
  const { p, pt, pb, pr, pl, m, mt, mb, mr, ml, fg } = props;
  return (
    <div
      className={className}
      style={{
        fontSize: size,
        height: h,
        width: w,
        flexGrow: fg,

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
};
//
//
//
//
interface TextProps {
  children?: ReactNode;
  className?: string;
  h?: string | number;
  w?: string | number;
  size?: string | number;
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
  fg?: number;
  style?: CSSProperties;
}
