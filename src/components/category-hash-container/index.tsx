import { ReactElement } from "react";
import { CategoryHash } from "../category-hash";

export function CategoryHashContainer({ children }: {
  children: Array<ReactElement<typeof CategoryHash>> | ReactElement<typeof CategoryHash>,
}) {
  return (
    <div className={"w-full md:w-11/12 mx-auto mt-3 md:mt-5 p-5"}>
      <div className={"inline-flex flex-wrap gap-2 sm:gap-3"}>
        {children}
      </div>
    </div>
  )
}