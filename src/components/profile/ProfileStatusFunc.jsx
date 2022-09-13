import React, {useEffect, useState} from 'react';

const ProfileStatusFunc = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <>
            {
                !editMode &&
                <div onDoubleClick={() => setEditMode(true)}>
                   <b>My status: </b> {props.status || 'Введите статус'}
                </div>
            }
            {
                editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={() => {
                               setEditMode(false)
                               props.updateUserStatus(status)
                           }}
                           value={status}
                           onChange={(e) => setStatus(e.currentTarget.value)}
                           type="text"/>
                </div>
            }
        </>
    );
}

export default ProfileStatusFunc;