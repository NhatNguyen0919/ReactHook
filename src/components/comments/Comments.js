import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from '../../customize/Fetch';

const Comments = () => {

    const { data: dataUser, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {isError === false && isLoading === false && dataUser && dataUser.length > 0 && dataUser.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <td >{item.id}</td>
                            <td >{item.name}</td>
                            <td >{item.email}</td>
                            <td >{item.phone}</td>
                            <td >{item.website}</td>
                        </tr>
                    )

                })}

                {isLoading === true &&
                    <div className="loader">Loading
                        <span></span>
                    </div>
                }

                {isError === true &&
                    <div className="loader"> Something wrong
                        <span></span>
                    </div>
                }
            </tbody>
        </table>
    )
}

export default Comments;