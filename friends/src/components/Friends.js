import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth.js";

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        getFriends();
    }, []);

    const getFriends = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then((res) => {
                console.log("res", res.data);
                setFriends(res.data);
            })

            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>FRIENDS LIST</h1>
            <div>
                {friends.map((friend) => {
                    return (
                        <div
                            key={friend.id}
                            style={{ border: "1px solid", fontSize: "12px" }}>
                            <h2>Name: {friend.name}</h2>
                            <h3>Age: {friend.age}</h3>
                            <h3>Email: {friend.email}</h3>
                            <p>ID: {friend.id}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
