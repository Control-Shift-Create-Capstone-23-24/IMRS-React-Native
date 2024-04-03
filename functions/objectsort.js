function sortDataByName(data) {
    const sortedKeys = Object.keys(data).sort((a, b) => a.localeCompare(b));
    const sortedData = {};
    sortedKeys.forEach(key => {
        sortedData[key] = data[key];
    });
    Object.keys(data).forEach(key => {
        delete data[key];
    });
    Object.assign(data, sortedData);
}


module.exports = { sortDataByName };