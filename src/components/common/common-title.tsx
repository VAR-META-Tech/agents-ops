import { cn } from '@/lib/utils';
import React from 'react'

interface ICommonTitle {
  children: React.ReactNode;
  className?: string;
}

export const CommonTitle = ({ children, className }: ICommonTitle) => {
  return (
    <div className={cn("text-5xl font-semibold", className)}>{children}</div>
  )
}
