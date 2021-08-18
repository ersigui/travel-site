exports.handler = function(event, context, callback){
    const secretContent = `
    <h3>Welcome to the secret area</h3>
    <p> I can tell you the reall question <strong>Q.1</strong></p>
    `
    
    let body
    
    if (event.body){
        body = JASON.parse(evetn.body)
    } else{
        body = {}
    }

    if (body.password == 'javascript'){
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }

    
}
