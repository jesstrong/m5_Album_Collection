function postRequest(location, requestBody, callback){
    fetch(location,{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(user => {
        callback(user);
    })
    .catch(err => console.log(err));
}

function putRequest(location, id, requestBody, callback){
    fetch(`${location}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
    },
    body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(user => {
        callback(user);
    })
    .catch(err => console.log(err));
}

function deleteRequest(location, id, callback){
    fetch(`${location}${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        callback(data);
    })
    .catch(err => console.log(err));
}

export default {
    postRequest,
    deleteRequest,
    putRequest

}
