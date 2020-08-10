import apiClient from '../utils/axios-with-auth';
import {
	PROFILE_DATA_LOADING,
	PROFILE_DATA_LOADING_DATA_SUCCESS,
	PROFILE_DATA_LOADING_DATA_FAILURE,
	apiURL,
	GET_USER_DATA
} from '../constants';

const profileDataSuccess = (payload) => ({
	payload,
	type: PROFILE_DATA_LOADING_DATA_SUCCESS
});

const profileDataFailure = (error) => ({
	error,
	type: PROFILE_DATA_LOADING_DATA_FAILURE
});

const profileDataLoading = () => ({
	type: PROFILE_DATA_LOADING
});

const userData = (payload) => ({
	payload,
	type: GET_USER_DATA
});

export const setUserData = (id) => (dispatch) => {
	dispatch(userData(id));
};

export const getUserData = (id) => async (dispatch) => {
	dispatch(profileDataLoading());
	try {
		const { data } = await apiClient.get(`${apiURL}/api/v1/users/${id}`);
		dispatch(profileDataSuccess(data));
	} catch (error) {
		dispatch(profileDataFailure(error.message));
	}
};

export const editProfile = ({ firstName, lastName, birthdayDate, userName, email }) => async (dispatch) => {
	dispatch(profileDataLoading());
	try {
		const { data } = await apiClient.put(`${apiURL}/api/v1/users/${apiClient.userId()}`, {
			birthdayDate,
			email,
			firstName,
			lastName,
			userName
		});
		dispatch(profileDataSuccess(data));
	} catch (error) {
		dispatch(profileDataFailure(error.message));
	}
};
