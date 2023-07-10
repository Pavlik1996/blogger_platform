import { TitleModal } from '../TitleModal/TitleModal.tsx'
import { Button } from '../Button/Button.tsx'
import s from './Notification.module.scss'

type PropsType = {
	title: string
	buttonTitle: string
	message: string
	onClose: () => void
}

export const Notification = ({ buttonTitle, title, onClose, message }: PropsType) => {
	return (
		<>
			<TitleModal title={title} onCLose={onClose} />
			<div className={s.notification}>
				<span>{message}</span>
				<div className={s.btn}>
					<Button variant={'primary'} onClick={onClose} fullWidth>
						{buttonTitle}
					</Button>
				</div>
			</div>
		</>
	)
}
