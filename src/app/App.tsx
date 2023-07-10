import { Blogs } from '../components/Blogs/Blogs'
import { Layout } from '../components/Layout/Layout'
import { Posts } from '../components/Posts/Posts'
import { Registration } from '../modules/authModules/registrationModule/components/registration/Registration'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route path={'blogs'} element={<Blogs />} />
				<Route path={'posts'} element={<Posts />} />
				<Route path={'registration'} element={<Registration />} />
			</Route>
		</Routes>
	)
}

export default App
