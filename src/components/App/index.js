import React from 'react';<nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Quotes App</a>
           <div className='navbar-form'>
           
           {!isAuthenticated &&
             <Login
               errorMessage={errorMessage}
               onLoginClick={ creds => dispatch(loginUser(creds)) }
             />
           }
           
           {isAuthenticated &&
             <Logout onLogoutClick={() => dispatch(logoutUser())} />
           }
         
         </div>
       </div>
     </nav>

function App({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

export default App;