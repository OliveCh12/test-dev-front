import React, { useState, useEffect } from "react";

import axios from "axios";

const Table = () => {
  // Initial State
  const [data, setData] = useState({
    users: []
  });
  // Initial Loading State
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get(`https://demo0050088.mockable.io/simple/profils`)
        .then(res => {
          const users = res.data;
          setData({ users });
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  // Methods
  function sortAscending() {)
    data.users.sort(function(a, b) {
      return a.balance - b.balance;
    });
  }

  // Render
  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Picture <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={sortAscending}
                  disabled
                >
                  Sort
                </button>
              </th>
              <th scope="col">
                LastName{" "}
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={sortAscending}
                >
                  Sort
                </button>
              </th>
              <th scope="col">
                FirstName{" "}
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={sortAscending}
                >
                  Sort
                </button>
              </th>
              <th scope="col">
                Balance{" "}
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={sortAscending}
                >
                  Sort
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.users.map(user => (
              <tr key={user.id}>
                <td>
                  <img src={user.picture} alt="user profil" />
                </td>
                <td>{user.lastname}</td>
                <td>{user.firstname}</td>
                <td>{user.balance} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
