import React, {useState, useEffect} from 'react';

/* The user-card components, rendered with data from renderUser function */

const UserCard = (props) => {
    
    
    const BASE_URL = "https://jsonplace-univclone.herokuapp.com";
    const [ user, setUser ] = useState();
    const [ stateHelper ] = useState('');

    const dataArr = [

        
            {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
                address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                    geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                    }
                },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
                company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
                }
            },
            {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
            lat: "-43.9509",
            lng: "-34.4618"
            }
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
            }
            }
    ]

    /* const { user } = props; */
    /* console.log("From the user component:", user)
    console.log("Result of calling the User in component user-card:", user) */

    useEffect( () => { 
        async function fetchUsers() {
          try {
            const response = await fetch(`${BASE_URL}/users`);
            const json = await response.json();
            console.log("Here is the result of the async function:", json);
            console.log(user)
            setUser(json)
            console.log(user[1])
            console.log(typeof user[3])
            /* return json; */
            /* return json; */ //can return array data if accessed here
          } catch(error) {
            console.error(error);
          }
        };
        fetchUsers();
        console.log(user)
        
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
        {dataArr.map(renderUser)}; {/* address and company are nested objects within objects, geo is another level down */}
        </>
    )
}

export default UserCard;