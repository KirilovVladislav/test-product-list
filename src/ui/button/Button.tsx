import { ElementType, ComponentProps } from 'react'
import styles from './Button.module.css'


type OwnProps<E extends ElementType = ElementType> = {
    active?: boolean,
    size?: string,
    variant?: string,
    color?: string,
    children: string,
    as?: E
}

type Props<E extends ElementType> = OwnProps<E> & Omit<ComponentProps<E>, keyof OwnProps>

const defaultElement = 'button'

export const Button = <E extends ElementType = typeof defaultElement>({
    active = false,
    as,
    children,
    ...props }: Props<E>) => {

    const TagName = as || defaultElement

    return (
        <TagName
            className={`${styles.button} ${active && styles.active}`}
            {...props}>
            <span className={styles.text}>{children}</span>
        </TagName>
    )
}
