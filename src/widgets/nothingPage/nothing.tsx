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

import { Flex } from "@/widgets/lib";
import { ReactNode } from "react";

export const Nothing = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100%"
      w="100%"
      //   b="green"
      style={{
        opacity: 0.3,
        color: "black",
        fontSize: 20,
      }}
    >
      {children}
    </Flex>
  );
};
