import s from './Menu.module.scss'
import { NavLink } from 'react-router-dom'

const setActive = (isActive: boolean) => (isActive ? `${s.link} ${s.active}` : s.link)

export const Menu = () => {
	return (
		<div className={s.menu}>
			<NavLink to={'/'} className={({ isActive }) => setActive(isActive)}>
				<p className={s.blogs}>Blogs</p>
			</NavLink>
			<NavLink to={'/posts'} className={({ isActive }) => setActive(isActive)}>
				<p className={s.posts}>Posts</p>
			</NavLink>
		</div>
	)
}
