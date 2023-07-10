import { ReactNode } from 'react'
import s from './Modal.module.scss'

type PropsType = {
	children: ReactNode
	onClose: () => void
}

export const Modal = ({ children, onClose }: PropsType) => {
	return (
		<div className={s.modal} onClick={onClose}>
			<div className={s.content} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}
