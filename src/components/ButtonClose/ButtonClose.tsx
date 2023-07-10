import s from './ButtonClose.module.scss'

type PropsType = {
	onClose: () => void
}

export const ButtonClose = ({ onClose }: PropsType) => {
	return <button className={s.closeButton} onClick={onClose}></button>
}
