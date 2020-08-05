import React from 'react';
import userResources from './useResources';

const UserList = () => {
    const users = userResources('users')

    return(
        <ol>
            {users.map(user => <li key={user.id} >{user.name}</li>)}
        </ol>
    )
}

export default UserList