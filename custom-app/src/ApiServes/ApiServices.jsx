import axios from "axios";
// ApiServices.js
export default function ApiServices() {
    const baseurl = process.env.REACT_APP_API_URL; // Make sure this is set correctly in your .env file

    // Function to fetch user data
    const getUserData = async () => {
        try {
            const response = await fetch(`${baseurl}/userData`);
            const data = await response.json();
            return data; // Return the data from the API call
        } catch (error) {
            console.error('Error fetching user data:', error);
            return []; // Return an empty array in case of an error
        }
    };
    //    Function to post user data

    const PostUserData = async (userDataGet) => {
        try {
            const postingData = await axios.post(`${baseurl}/userDataPost`,userDataGet)
            return postingData.data;  // Return the response from the backend (e.g., user info or success message)
        } catch(error) {
            console.error('Error during user registration:', error);  // Log if there's an error
            throw error;  // Rethrow error for handling elsewhere
        }
    }
    // put api edit user Data this type of code 

    const EditUserData = async (updateData) => {
        try {
            const response = await axios.put(`${baseurl}/updateUser/${updateData.srnumber}`, updateData);
            console.log('Updated data:', response.data); // Log the response data to check
            return response.data;  // Return the updated data from the backend
        } catch (error) {
            console.error('Error updating user data:', error);
            throw error;
        }
    };

    // Return the function so it can be used in other components
    return { getUserData ,PostUserData,EditUserData};
}
