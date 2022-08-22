import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        value: 'Введите ваш статус'
    }

    editModeActivate() {
        this.setState({
            editMode: true
        })
    }

    editModeDeActivate() {
        this.setState({
            editMode: false
        })
    }

    statusSetText(e) {
        this.setState({
            value: e.currentTarget.value
        })
    }

    render() {
        return (
            <>  {!this.state.editMode
                ? <div onDoubleClick={this.editModeActivate.bind(this)}>
                    {this.state.value}
                </div>

                : <div>
                    <input onChange={this.statusSetText.bind(this)} onBlur={this.editModeDeActivate.bind(this)} type="text" value={this.state.value}/>
                </div>

            }
            </>
        );
    }

};

export default ProfileStatus;