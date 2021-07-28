import React from 'react';

/* The user-card components, rendered with data from renderUser function */

const UserCard = (props) => {

    const { user } = props;
    console.log("From the user component:", user)
    console.log("Result of calling the User in component user-card:", user)


    /* const tester = user.map(item => ({ name: item.name, email: item.email}))
    console.log(tester); */

    //Im getting back undefined when I want individual values

    //comes back as an object, which is why no array methods work
    /* console.log("Here is an example of user data", typeof user) */

    /* To template user-cards in the UI: */
    const renderUser = (user, index) => {
        return(
            <div className="user-card" key={"user-" + index}>
            <header>
                <h2>{user.name}</h2>
            </header>
            <section className="company-info">
                <p><b>Contact:</b>{user.email}</p>
                <p><b>Works for:</b>{user.company}</p>
                <p><b>Company creed:</b>{user.company}</p>
            </section>
            <footer>
                <button className="load-posts">POSTS BY {user.username}</button>
                <button className="load-albums">ALBUMS BY {user.username}</button> 
            </footer>
        </div>
        )
    };
    
    return (
        <>
        {/* {user.map(renderUser) }; */}
        </>
    )
}

export default UserCard;