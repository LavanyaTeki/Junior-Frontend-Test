import React, { useState, useEffect } from "react";

const User: React.FC = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState({});

  interface IUser {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((res) => setState(res.slice(0, 10)))
      .catch((err) => setError(err));
  }, []);
  return (
    <>
      <div className="container">
        <h1>Data from APIS</h1>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">EMAIL</th>
            <th scope="col">GENDER</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {state.length > 0 &&
            state.map((state: IUser) => (
              <tr key={state.id}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.email}</td>
                <td>{state.gender}</td>
                <td>{state.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
