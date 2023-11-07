import { createContext, useContext } from 'react';

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
  const loginUser = (user) => {
    // Check if the user exists
    if (!user) {
      return;
    }
    // Generate a unique id for this student
    const id = createId(students);
    
    // We use the spread operator to fill in the details from the student object that was passed while adding the new `id`
    const newStudent = { ...student, id };
    
    // Update state with the students array with the newStudent
    setStudents([...students, newStudent]);
  };
  
  // Function to logout user 
  // If logout successful, toggle logout to false, set userId null 
  
  
  // Provider components expect a value prop to be passed
  return (
    <LoginContext.Provider value={{ setLogin, login, loginUser }}>
      {/* Render children passed from props */}
      {children}
    </LoginContext.Provider>
  );
};
  