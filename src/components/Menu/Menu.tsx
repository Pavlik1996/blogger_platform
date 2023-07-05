import s from './Menu.module.scss'

export const Menu = () => {
	return (
		<div className={s.menu}>
			<button className={s.button}>
				<p className={s.blogs}>Blogs</p>
			</button>
			<button className={s.button}>
				<p className={s.posts}>Posts</p>
			</button>
		</div>
	)
}
