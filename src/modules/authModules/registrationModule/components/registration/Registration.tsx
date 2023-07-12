import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import s from './Registration.module.scss'
import imageRegistration from '../../../../../assets/images/svg/image-registration.svg'
import { Button } from '../../../../../components/Button/Button.tsx'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRegistrationMutation } from '../../../authApi/authApi.ts'
import { Input } from '../../../../../components/Input/Input.tsx'
import { useState } from 'react'
import { ModalSignUp } from '../ModalSingUp/ModalSignUp.tsx'
import { Link } from 'react-router-dom'

export type RegistrationPostType = {
	login: string
	password: string
	email: string
}

export const Registration = () => {
	const [email, setEmail] = useState('')
	const [isActiveModal, setIsActiveModal] = useState(false)
	const [registration, { isLoading, isSuccess }] = useRegistrationMutation()

	const schema = yup.object().shape({
		login: yup.string().required('').min(5, 'min 5 symbols'),
		email: yup.string().email('email should be correct').required('field required'),
		password: yup
			.string()
			.min(6, 'password must be at least 6 characters')
			.max(20, 'password must be at most 20 characters')
			.required('field required')
	})

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<RegistrationPostType>({
		resolver: yupResolver(schema)
	})

	const onSubmit: SubmitHandler<RegistrationPostType> = async (data) => {
		setEmail(data.email)
		await registration(data)
		isSuccess && setIsActiveModal(true)
	}


	return (
		<div className={s.wrapper}>
			<div className={s.card}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<span className={s.headerText}>Sing Up</span>
					<Input register={register} name={'login'} title={'Username'} error={errors.login?.message || ''} />
					<Input register={register} name={'email'} title={'Email'} error={errors.email?.message || ''} />
					<Input register={register} name={'password'} title={'Password'} error={errors.password?.message || ''}
								 password />
					<div className={s.success}>
						{
							isSuccess && 'The link has been sent by email. ' +
							'If you don’t receive an email, send link again'
						}
					</div>
					<Button variant={'primary'} type={'submit'} fullWidth disabled={isLoading}>
						Sing Up
					</Button>
				</form>
				<div className={s.footer}>
					<span className={s.footer_text}>Already a member?</span>
					<Link className={s.btn_sign_in} to={'/login'}>
						Sign In
					</Link>
				</div>
			</div>
			<img src={imageRegistration} alt='image-registration' className={s.image} />
			{isActiveModal && <ModalSignUp onClosePopupHandler={() => setIsActiveModal(false)} email={email} />}
		</div>
	)
}