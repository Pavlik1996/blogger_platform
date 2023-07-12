import s from './ConfirmRegistration.module.scss'
import { Button } from '../../../../../components/Button/Button.tsx'
import { Link } from 'react-router-dom'


export const ConfirmRegistration = () => {
	return (
		<div className={s.wrapper}>
			<span>Congratulations! <br /> Your email has been confirmed
			</span>
			<Button as={Link} to={'/login'}>Sing In</Button>
			<img src='' alt='' />
		</div>
	)
}
