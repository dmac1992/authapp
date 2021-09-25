const loginRequest = async (payload) => {

    const response =  await fetch("/api/auth/login", {
        body: payload,
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.json();

}

export default loginRequest;