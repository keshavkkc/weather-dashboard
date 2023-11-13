import axios from 'axios'

export const startCreateUsers = (data, resetForm, redirect) => {
    return (dispatch) => {
        axios.post('http://localhost:3051/api/users/register', data)
            .then((response) => {
                console.log(response.data)
                resetForm()
                redirect()
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

export const startLoginUsers = (data, resetForm, redirect) => {
    return (dispatch) => {
        axios.post('http://localhost:3051/api/users/login', data)
            .then((response) => {
                const token = response.data.token
                if (token) {
                    localStorage.setItem('token', token)
                    redirect()
                    resetForm()
                } else {
                    alert('Please enter right details')
                }
            })
    }
}