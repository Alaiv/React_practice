import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2b0601d3-ce34-4fb8-840b-ba8921ccbb90'
    }
});


export const usersAPI = {
    getUsers(selectedPage = 1, pageSize = 5) {
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`).then(response => response.data)
    },
    unFollowUser(id) {
        return instance.delete('follow/' + id).then(response => response.data)
    },
    followUser(id) {
        return instance.post('follow/' + id).then(response => response.data)
    },
}

export const headerAPI = {
    getAuthUser() {
        return instance.get('auth/me').then(response => response.data)
    },
    getAuthUserPhoto(id) {
        return instance.get('profile/' + id).then(response => response.data)
    },
    authorizeUser({login, password, rememberMe = false, captcha = null}) {
        return instance.post('auth/login/', {email: login, password, rememberMe, captcha})
    },
    unAuthorizeUser() {
        return instance.delete('auth/login')
    },
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}

export const profileAPI = {
    getProfileInfo(id) {
        return instance.get('profile/' + id)
    },
    getProfileStatus(id) {
        return instance.get('profile/status/' + id)
    },
    putProfileStatus(status) {
        return instance.put('profile/status', {status: status})
    },
    putProfileAva(file) {
        let formData = new FormData()
        formData.append('image', file)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    putProfileFullInfo(fullInfo) {
        return instance.put('profile', fullInfo)
    }
}


// export const updateUsers = (page = 1, pageSize = 5) => {
//    return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`, {
//         withCredentials: true
//     })
// }