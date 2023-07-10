import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
	as?: T
	variant?: 'primary' | 'secondary' | 'tertiary' | 'link' | 'active'
	fullWidth?: boolean
	className?: string
	icon?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
	props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
	const {
		variant = 'primary',
		fullWidth,
		className,
		as: Component = 'button',
		icon,
		...rest
	} = props

	if (icon) {
		return (
			<Button
				className={`${s[variant]} ${s.btn} ${s.witchIcon} ${
					fullWidth ? s.fullWidth : ''
				} ${className}`}
				{...rest}
			>
				<img src={icon} className={s.icon} alt={'icon'} />
				Button primary
			</Button>
		)
	}

	return (
		<Component
			className={`${s[variant]} ${variant === 'link' ? s.link : s.btn} ${
				fullWidth ? s.fullWidth : ''
			} ${className}`}
			{...rest}
		/>
	)
}
