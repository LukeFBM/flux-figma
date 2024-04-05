import { FontType, TextVariants } from "../../lib/types";
import cn from "classnames";

export type TextProps = {
  fontType?: FontType;
  variant: TextVariants;
  as?: React.ElementType;
  className?: string;
  children?: string | number;
  href?: string;
};

const Text = (props: TextProps) => {
  const {
    as: Component = "p",
    fontType = "primary",
    className,
    children,
    variant,
    href,
  } = props;
  return (
    <Component
      href={href}
      className={cn(variant, className, {
        "font-secondary": fontType === "secondary",
      })}
    >
      {children}
    </Component>
  );
};

export default Text;
