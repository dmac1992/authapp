const registerRequest = (payload) => {

    return fetch("/api/auth/register", {
        body: payload,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            //todo - throw erro
            return response.json();
        })
        .then((payload) => {
                // ReactDOM.createPortal(() => "<h1>lsdhjflskdhf</h1>", document.querySelector('#notification-portal'));
            //  registerRequestPayload = payload;
             return payload;
        })
        .catch((err) => {
             return err;
        });
}

export default registerRequest;