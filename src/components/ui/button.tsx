"use client";

import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-bold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default: 'bg-[#f5f5f5] text-[#111111]! hover:bg-[#e5e5e5]',
        outline: 'border-[#bdbdbd] bg-transparent text-[#f7f7f7] hover:bg-[#bdbdbd] hover:text-[#111]',
        ghost: 'bg-transparent hover:bg-[#282828] text-[#f7f7f7]',
      },
      size: {
        default: 'h-10 px-4 gap-2.5 text-[13px]',
        sm: 'h-9 px-3.5 gap-2 text-[12px]',
        lg: 'h-11 px-5 gap-3 text-[14px]',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  children: React.ReactNode;
  rollText?: string;
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  href,
  children,
  rollText,
}: ButtonProps) {
  const classNames = cn(buttonVariants({ variant, size, className }));

  const renderContent = () => {
    if (rollText) {
      return (
        <span className="roll-text-wrapper">
          <span className="roll-text">
            <span>{children}</span>
            <span>{rollText}</span>
          </span>
        </span>
      );
    }
    return children;
  };

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

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {renderContent()}
      </Link>
    );
  }

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