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

import React from "react";
import { ChangeEvent, CSSProperties } from "react";

export const Input = React.memo((props: InputProps) => {
  const {
    style,
    h,
    w = "100%",
    br = 5,
    color = "var(--inputBackground)",
    className,
    placeHolder,
    title,
    fontSize = 12,
  } = props;
  const {
    p,
    pt = 7,
    pb = 7,
    pr,
    pl = 10,
    m,
    mt,
    mb,
    mr,
    ml,
    b = "var(--borderColor)",
    fg,
    onChange,
  } = props;
  return (
    <div
      style={{
        marginTop: mt !== undefined ? mt : m,
        marginBottom: mb !== undefined ? mb : m,
        marginRight: mr !== undefined ? mr : m,
        marginLeft: ml !== undefined ? ml : m,
      }}
    >
      <p style={{ fontSize: fontSize + 2, marginLeft: 2 }}>{title}</p>
      <input
        maxLength={40}
        placeholder={placeHolder}
        className={className}
        onChange={onChange}
        style={{
          border: b !== undefined ? `1px solid ${b}` : "none",
          flexGrow: fg,
          fontSize: fontSize,
          height: h,
          width: w,

          paddingTop: pt !== undefined ? pt : p,
          paddingBottom: pb !== undefined ? pb : p,
          paddingRight: pr !== undefined ? pr : p,
          paddingLeft: pl !== undefined ? pl : p,

          outline: "none",
          borderRadius: br,
          backgroundColor: color,
          boxShadow: "var(--boxShadowInput)",

          ...style,
        }}
      />
    </div>
  );
});

//
interface InputProps {
  className?: string;
  b?: string;
  fg?: number;
  title?: string;

  br?: number;

  fontSize?: number;
  placeHolder?: string;
  color?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

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
