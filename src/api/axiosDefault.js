import axios from "axios";

axios.defaults.BaseURL = 'https://social-space-api.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.WithCredentials = true;