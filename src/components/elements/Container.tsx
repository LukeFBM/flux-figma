import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const Container = ({
  className,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return (
    <section className={`max-w-6xl mx-auto w-full ${className}`}>
      {props.children}
    </section>
  );
};

export default Container;
