import React, {useState, useEffect} from 'react';
import { CustomButton } from '../index.js';

/* The user-card components, rendered with data from renderUser function */

const UserCard = (props) => {
    
    
    const BASE_URL = "https://jsonplace-univclone.herokuapp.com";
    const [ user, setUser ] = useState(null);
    const { isActiveSectionVisible, setIsActiveSectionVisible } = props;

/* This takes care of the fetch call needed for the renderUser in the DOM render: */
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


/* Helper Function to toggle Active button; works with toggleActiveClass() below:*/
    function toggleActiveButton() {
        /* changeCardState({...cardState, activeObject: cardState.objects[index]}) */
    }

/* Helper Function to toggle active classNames in the button based on some value:*/
    function toggleActiveClass() {
        console.log("clicked")
        return /* isActiveSectionVisible === false */ user ? "active button-active": "button-inactive"
    }
/* function toggleActiveStyles(index) {
    return cardState.objects[index] === cardState.activeObject ? "card__inner is-flipped active" : "card__inner";
} */


      
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
                {/* Using custom-button component here */}
                <CustomButton children={`POSTS BY ${user.username}`} toggleActiveClass/* className={toggleActiveClass()} */ onClick={() => toggleActiveClass()}/>
                <CustomButton children={`ALBUMS BY ${user.username}`}/>
            </footer>
        </div>
        )
    };
    
    return (
        <>
        {user && user.map(renderUser)}; {/* Needed ```user && user.map``` to load data and avoid an `undefined` value on initial render*/}
        </>
    )
}

export default UserCard;