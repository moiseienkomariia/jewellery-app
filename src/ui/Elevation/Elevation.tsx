import {
  Children,
  cloneElement,
  isValidElement,
  type PropsWithChildren,
} from "react";

export interface ElevationProps {
  standalone?: boolean;
}

export const Elevation = ({
  children,
  standalone,
}: PropsWithChildren<ElevationProps>) => {
  if (standalone) {
    return Children.map(Children.toArray(children), (child) => {
      if (!isValidElement(child)) {
        return child;
      }

      return cloneElement(child, {
        // @ts-expect-error this is just temporary
        className: `elevation ${child.props?.className || ""}`,
      });
    });
  }

  return <div className="elevation">{children}</div>;
};
