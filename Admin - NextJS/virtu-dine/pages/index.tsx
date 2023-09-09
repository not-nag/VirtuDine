/* Comments are generated by ChatGPT for future references */

// Import React library to create React components
import React from 'react';

// Import the Background component from a file with the alias '@/components/Background'
import Background from '@/components/Background';

// Import the Login component from a file with the alias '@/components/Login'
import Login from '@/components/Login';

// Define a functional React component named Homepage
const Homepage: React.FC = () => {
    return (
        // Render a React fragment to group multiple components without an enclosing div
        <>
            {/* Render the Background component */}
            <Background />
            {/* Render the Login component */}
            <Login />
        </>
    );
}

// Export the Homepage component as the default export of this module
export default Homepage;
