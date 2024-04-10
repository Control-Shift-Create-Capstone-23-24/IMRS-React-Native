function sortDataByName(data) {
    
    data.sort((a, b) => a.user.localeCompare(b.user));
    
}


module.exports = { sortDataByName };