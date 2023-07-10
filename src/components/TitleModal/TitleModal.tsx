import s from './TitleModal.module.scss'
import closeSvg from '../../assets/images/svg/close.svg'

type PropsType = {
	title: string
	onCLose: () => void
}

export const TitleModal = ({ title, onCLose }: PropsType) => {
	return (
		<div className={s.container}>
			<h3>{title}</h3>
			<img src={closeSvg} alt='close button' onClick={onCLose} className={s.img} />
		</div>
	)
}
