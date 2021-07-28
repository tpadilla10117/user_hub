import React, {useState, useEffect} from 'react';

/* The user-card components, rendered with data from renderUser function */

const UserCard = (props) => {
    
    
    const BASE_URL = "https://jsonplace-univclone.herokuapp.com";
    const [ user, setUser ] = useState(null);

    useEffect( () => { 

        async function fetchUsers() {
            try {
                
                const response = await fetch(`${BASE_URL}/users`);
                response.json().then( result => setUser(result));
              
            } catch(error) {
              console.error(error);
            }
          };
        
        fetchUsers();
        
      }, []);
      
    /* To template user-cards in the UI: */
    const renderUser = (user, index) => {
        return(
            <div className="user-card" key={"user-" + index}>
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
        )
    };
    
    return (
        <>
        {user && user.map(renderUser)}; {/* Needed ```user && user.map``` to work*/}
        </>
    )
}

export default UserCard;