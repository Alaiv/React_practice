import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    editModeActivate() {
        this.setState({
            editMode: true
        })
    }

    editModeDeActivate(e) {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    statusSetText(e) {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            })
    }

    render() {
        return (
            <>  {!this.state.editMode
                ? <div>
                    <span
                        onDoubleClick={this.editModeActivate.bind(this)}>{this.props.status || 'Введите статус'}
                    </span>
                </div>

                : <div>
                    <input autoFocus={true}
                           onChange={this.statusSetText.bind(this)}
                           onBlur={this.editModeDeActivate.bind(this)}
                           type="text" value={this.state.status}/>
                </div>

            }
            </>
        );
    }

}

export default ProfileStatus;