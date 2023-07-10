import { Header } from '../Header/Header.tsx'
import { Outlet } from 'react-router-dom'
import s from './layout.module.scss'

export const Layout = () => {
	return (
		<>
			<Header />

			<div className={s.wrapper}>
				<Outlet />
			</div>
		</>
	)
}
