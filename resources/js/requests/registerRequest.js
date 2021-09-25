import store from "../redux/store";

const registrationRequest = async (payload) => {

    const response = await fetch("/api/auth/register", {
        body: payload,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.json();

};

export default registrationRequest;
