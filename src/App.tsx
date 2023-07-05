import './App.css'
import { Blog } from './components/Blogs/Blogs'
import { Header } from './components/Header/Header'
import { Menu } from './components/Menu/Menu'

function App() {
	return (
		<>
			<Header />
			<div style={{ display: 'flex' }}>
				<Menu />
				<Blog />
			</div>
		</>
	)
}

export default App
