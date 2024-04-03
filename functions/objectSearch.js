const { sortDataByName } = require("./objectsort");


// Update the function to accept sortDataByName function as a parameter
function updateUserLocation(data, sortFunction, name, newLatitude, newLongitude, status = "New") {
    // Check if the user exists in the data
    if (data.hasOwnProperty(name)) {
        // Update the latitude, longitude, and status for the existing user
        data[name].forEach(user => {
            user.latitude = newLatitude;
            user.longitude = newLongitude;
            user.status = status;
        });
        console.log(`Location updated for user '${name}'.`);
    } else {
        // Add the new user with their data
        data[name] = [{ "latitude": newLatitude, "longitude": newLongitude, "status": status }];
        console.log(`User '${name}' added with location (${newLatitude}, ${newLongitude}) and status '${status}'.`);
        
        // Sort the data by name after adding the new user
        sortFunction(data);
    }
}
