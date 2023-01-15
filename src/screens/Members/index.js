import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Members() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await fetch("http://3.8.100.74:8080/admin/api/v2/waiting_list/getAllWaitlistedUsers", {
                headers: {
                    "x-product": "LEDGER"
                }
            });
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            alert(error.msg);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Display Name</th>
                        <th scope="col">Rank</th>
                        <th scope="col">Referral Code</th>
                        <th scope="col">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, idx) =>
                    (
                        <tr key={user.email}>
                            <th scope="row">{idx + 1}</th>
                            <td>{user.firstName}</td>
                            <td>{user.email}</td>
                            <td>{user.displayName}</td>
                            <td>{user.rank}</td>
                            <td>{user.referral_code}</td>
                            <td>{dayjs(user.created_at).format('YYYY-MM-DD hh:mm')}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    );
}
