import React from 'react';

const UserCard = (user) => {

    return <>
        <div className="user-card">
            <header>
                <h2>{user.name}</h2>
            </header>
            <section className="company-info">
                <p><b>Contact:</b>{user.email}</p>
                <p><b>Works for:</b>{user.company.name}</p>
                <p><b>Company creed:</b>{user.company.catchPhrase}</p>
            </section>
            <footer>
                <button className="load-posts">POSTS BY {user.username}</button>
                <button className="load-albums">ALBUMS BY {user.username}</button> 
            </footer>
        </div>
    </>
}

export default UserCard;