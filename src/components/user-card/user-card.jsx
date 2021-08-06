import React, {useState, useEffect} from 'react';
import { CustomButton } from '../index.js';
import { BASE_URL, fetchUserPostList } from '../utils.js';
import './user-card.styles.scss';

/* The user-card components, rendered with data from renderUser function */

const UserCard = (props) => {
    
    
    const { isActiveSectionVisible, setIsActiveSectionVisible, user, setUser, toggleActiveClass, fetchUserAlbumList, isActiveClickHandler, activeClass, setActiveClass, albumCardData, setAlbumCardData, postCardData, setPostCardData, componentVisibility, setComponentVisibility } = props;

    

    console.log("Here is the albumCard Data", albumCardData)
  
    /* Handler for making the Parent Component visible */
    const handleSectionComponentVisibility = () => {
        setComponentVisibility(!componentVisibility)
        setActiveClass(false);
    
    };
console.log('Here is component visibiloty:', componentVisibility);


    /* Helper Function to toggle active classes for other components */

    const activeClassHelperToggler = () => {
        setActiveClass(activeClass); //Needs to set to false
                                    //Needs to make the new component activwe
    }

      
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
                <CustomButton children={`POSTS BY ${user.username}`} onClick={ () =>  { fetchUserPostList(BASE_URL, user.id).then(setPostCardData); /* handleSectionComponentVisibility(); */ }  }/>
                <CustomButton children={`ALBUMS BY ${user.username}`} onClick={ () => { setAlbumCardData(fetchUserAlbumList(BASE_URL, user.id )); setActiveClass(!activeClass); /* handleSectionComponentVisibility(); */ }}/>
            </footer>
        </div>
        )
    };
    
    return (
        <>
        {user && user.map(renderUser)} {/* Needed ```user && user.map``` to load data and avoid an `undefined` value on initial render*/}
        </>
    )
}

export default UserCard;