import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setresource] = useState('posts')
    return(
        <div>
            <UserList/>
            <div>
                <button onClick={()=> setresource('posts')} >Posts</button>
                <button onClick={()=> setresource('Todos')} >Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    )
}
export default App