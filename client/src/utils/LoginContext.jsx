import { createContext, useContext, useState } from 'react';

// Initialize new context for logged in 
const LoginContext = createContext();

// We create a custom hook to provide immediate usage of the login context in other components
export const useLoginContext = () => useContext(LoginContext);

// LoginProvider component that holds initial state, returns provider component
// Which pages does the user need to be logged in to gain access to??
export const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState( 
    {
      loggedIn: false,
      userId: ""
    }
  );

  // Function to login user -- calls backend 
  // If login successful, toggle login to true, set userId
  // Going to need a fetch request for the API
  const loginUser = async (user) => {
    // Check if the user exists
    if (!user) {
      return;
    } else {
        // Send a POST request to the API endpoint
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            // If successful, redirect the browser to dashboard
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    }


    // // Generate a unique id for this student
    // const id = createId(students);
    
    // // We use the spread operator to fill in the details from the student object that was passed while adding the new `id`
    // const newStudent = { ...student, id };
    
    // // Update state to logged in 
    loggedin = true;

  };
  
  // Function to logout user 
  // If logout successful, toggle logout to false, set userId null 
  const logoutUser = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
    loggedin = false;
  } else {
    alert(response.statusText);
  }
};
  
  // Provider components expect a value prop to be passed
  return (
    <LoginContext.Provider value={{ setLogin, login, loginUser, logoutUser }}>
      {/* Render children passed from props */}
      {children}
    </LoginContext.Provider>
  );
};
  