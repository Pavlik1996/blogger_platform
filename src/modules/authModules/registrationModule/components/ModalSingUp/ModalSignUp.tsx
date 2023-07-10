import { Modal } from '../../../../../components/Modal/Modal.tsx'
import { Notification } from '../../../../../components/Notification/Notification.tsx'

type PropsType = {
	onClosePopupHandler: () => void
	email: string
}

export const ModalSignUp = ({ onClosePopupHandler, email }: PropsType) => {
	return (
		<Modal onClose={onClosePopupHandler}>
			<Notification
				title='Email sent'
				buttonTitle='OK'
				message={`We have sent a link to confirm your email to ${email}`}
				onClose={onClosePopupHandler}
			/>
		</Modal>
	)
}
