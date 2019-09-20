import axios from 'axios';

function axisoWithAuth() {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: ("http://localhost:5000/api"),
		headers: {
			Authorization: token
		}
	})
}

export default axisoWithAuth;