import { useState, useEffect } from "react";

const UserData = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/leonardo-coutinho-dev")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <ul className="user-data-table">
      <li>
        <strong>Nome:</strong> <i>{userData.name}</i>
      </li>
      <li>
        <strong>Bio:</strong> <i>{userData.bio}</i>
      </li>
      <li>
        <strong>Repositórios publicos:</strong> <i>{userData.public_repos}</i>
      </li>
      <li>
        <strong>Perfil:</strong>{" "}
        <i>
          <a href="https://github.com/leonardo-coutinho-dev">
            {userData.html_url}
          </a>
        </i>
      </li>
    </ul>
  );
};

export default UserData;
