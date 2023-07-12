import { Blogs } from '../components/Blogs/Blogs'
import { Layout } from '../components/Layout/Layout'
import { Posts } from '../components/Posts/Posts'
import { Registration } from '../modules/authModules/registrationModule/components/registration/Registration'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {
	ConfirmRegistration
} from '../modules/authModules/registrationModule/components/ConfirmRegistration/ConfirmRegistration.tsx'

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route path={'blogs'} element={<Blogs />} />
				<Route path={'posts'} element={<Posts />} />
				<Route path={'registration'} element={<Registration />} />
				<Route path={`confirm`} element={<ConfirmRegistration />} />
			</Route>
		</Routes>
	)
}

export default App
