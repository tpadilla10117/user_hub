import React from 'react';
import './user-list.styles.scss';

const UserList = ( {content} ) => {
    return <>
        <aside id="user-list">
            {content}
        </aside>
    </>
};

export default UserList;