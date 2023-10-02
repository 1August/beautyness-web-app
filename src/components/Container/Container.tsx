import { ComponentProps, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils.ts'

export type ContainerProps = {
    // isWide?: boolean
} & ComponentProps<'div'>
export const Container = (props: PropsWithChildren<ContainerProps>) => {
    const { children, className, ...otherProps } = props
    return (
        <div className={cn('px-6 md:px-12 lg:px-24', className)} {...otherProps}>
            {children}
        </div>
    )
}

// <div className={cn(isWide ? 'px-6 md:px-12 lg:px-24' : 'px-16 md:px-32 lg:px-64', className)} {...otherProps}>
