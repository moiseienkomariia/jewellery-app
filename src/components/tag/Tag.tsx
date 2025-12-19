import type { PropsWithChildren } from "react";

export interface TagProps {
  onClick?: () => void;
  active?: boolean;
}

export const Tag = ({
  onClick,
  active,
  children,
}: PropsWithChildren<TagProps>) => {
  return (
    <button onClick={onClick} className={active ? "active" : ""}>
      {children}
    </button>
  );
};
