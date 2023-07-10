import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { httpMethods } from '../../../assets/utils/httpMethods'
import { RegistrationPostType } from '../registrationModule/components/registration/Registration.tsx'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://back-samurai.vercel.app/api/',
		credentials: 'include'
	}),
	endpoints: builder => ({
		registration: builder.mutation<void, RegistrationPostType>({
			query: body => ({
				url: 'auth/registration',
				method: httpMethods.POST,
				body
			})
		})
	})
})

export const { useRegistrationMutation } = authApi
