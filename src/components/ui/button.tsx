"use client";

import React from "react";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-bold whitespace-nowrap transition-all outline-none select-none overflow-hidden focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[#f5f5f5] text-[#111111]! hover:bg-[#e5e5e5]",

        outline:
          "border-[#bdbdbd] bg-transparent text-[#f7f7f7] hover:text-[#111]",

        ghost:
          "bg-transparent text-[#f7f7f7] hover:bg-[#282828]",
      },

      size: {
        default: "h-10 px-4 text-[13px]",
        sm: "h-9 px-3.5 text-[12px]",
        lg: "h-11 px-5 text-[14px]",
        icon: "size-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
  rollText?: string;
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  href,
  children,
  rollText,
}: ButtonProps) {
  const classNames = cn(
    buttonVariants({ variant, size }),
    className
  );

  const renderContent = () => {
    const childrenArray = React.Children.toArray(children);
    const iconChild =
      childrenArray.length > 1
        ? childrenArray[childrenArray.length - 1]
        : null;

    const textChildren =
      childrenArray.length > 1
        ? childrenArray.slice(0, -1)
        : childrenArray;

    /*
     * Arrow
     */
const renderArrow = () => {
  if (
    !React.isValidElement<{ className?: string }>(iconChild)
  ) {
    return null;
  }

  return (
    <span className="ml-2 flex size-5 shrink-0 items-center justify-center">
      {React.cloneElement(iconChild, {
        className: cn(
          iconChild.props.className,
          "size-5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover/button:rotate-[360deg]"
        ),
      })}
    </span>
  );
};


    /*
     * Rolling text
     */
    if (rollText) {
      return (
        <span className="flex items-center">
          {/* Text viewport */}
          <span className="relative h-5 overflow-hidden">
            <span
              className="
                flex
                flex-col
                transition-transform
                duration-150
                ease-[cubic-bezier(0.76,0,0.24,1)]
                group-hover/button:-translate-y-5
              "
            >
              {/* Initial text */}
              <span className="flex h-5 items-center whitespace-nowrap">
                {textChildren}
              </span>

              {/* Hover text */}
              <span className="flex h-5 items-center whitespace-nowrap">
                {rollText}
              </span>
            </span>
          </span>

          {/* Arrow */}
          {renderArrow()}
        </span>
      );
    }

    /*
     * Normal button
     */
    return (
      <span className="flex items-center">
        <span className="flex items-center whitespace-nowrap">
          {textChildren}
        </span>

        {renderArrow()}
      </span>
    );
  };

  /*
   * asChild
   */
  if (asChild) {
    return (
      <ButtonPrimitive
        data-slot="button"
        className={classNames}
      >
        {renderContent()}
      </ButtonPrimitive>
    );
  }

  /*
   * Link
   */
  if (href) {
    return (
      <Link href={href} className={classNames}>
        {renderContent()}
      </Link>
    );
  }

  /*
   * Normal button
   */
  return (
    <ButtonPrimitive
      data-slot="button"
      className={classNames}
    >
      {renderContent()}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
