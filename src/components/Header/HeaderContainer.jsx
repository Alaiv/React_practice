import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAvatar, setUserData, toggleLoader} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.toggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.toggleLoader(false)
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + id, {withCredentials: true})
                        .then(response => {
                            this.props.setAvatar(response.data.photos.small !== null
                                ? response.data.photos.small
                                : 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg')
                        })
                }
            })
    }

    render() {
        return (
            <Header {...this.props.state.auth}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {...state}
    }
}

export default connect(mapStateToProps, {setUserData, toggleLoader, setAvatar})(HeaderContainer);