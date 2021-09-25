const logoutRequest = async () => {

    const response =  await fetch("/api/auth/logout", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    return response.json();

}

export default logoutRequest;