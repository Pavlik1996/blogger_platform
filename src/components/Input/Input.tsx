import { UseFormRegister } from 'react-hook-form'
import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import s from './Input.module.scss'
import eye from '../../assets/images/svg/visibility_off.svg'

type PropsType = {
	title?: string
	disabled?: boolean
	error?: string
	register: UseFormRegister<any>
	name: string
	password?: boolean
}

type DefaultInputPropsType = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>

export const Input = ({
												title,
												disabled,
												register,
												name,
												error,
												password,
											}: PropsType & DefaultInputPropsType) => {

	const [isShowPassword, setIsShowPassword] = useState(false)

	const onShowPasswordHandler = () => {
		setIsShowPassword(!isShowPassword)
	}

	const eyePassword = <img className={s.eye} src={eye} alt={'off password'} onClick={onShowPasswordHandler} />

	return (
		<div className={s.container}>
			{title && <span className={s.title}>{title}</span>}
			<div className={s.inputWrapper}>
				<input
					className={error ? `${s.input} ${s.errorInput}` : s.input}
					disabled={disabled}
					{...register(name)}
					data-isshowpassword={password && isShowPassword}
					autoComplete={password ? 'off' : 'on'}
				/>
				{password && eyePassword}
			</div>
			<span className={s.error}>{error}</span>
		</div>
	)
}
