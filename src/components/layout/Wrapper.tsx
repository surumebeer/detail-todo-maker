import { ReactNode, FC } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {children}
    </div>
  );
};
