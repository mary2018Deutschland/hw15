import { useCallback, useState } from "react";
import { FilterUsers } from "../FilterUsers";

function UserList({ usersArray }) {
  const [users, setUsers] = useState(usersArray);
  const handleSearch = useCallback(
    (text) => {
      const filtredUsers = usersArray.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filtredUsers);
    },
    [usersArray]
  );

  return (
    <div>
      <FilterUsers onChange={handleSearch} />
      <ul>
        {users?.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
