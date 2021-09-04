import React from 'react';
export interface Param {
  name: string;
  personId: string;
}

export interface User {
  id: number;
  name: string;
}

interface SearchProps {
  users: User[];
  param: Param;
  setParam: React.Dispatch<React.SetStateAction<Param>>;
}

const Search: React.FC<SearchProps> = ({ users, param, setParam }) => {
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.target as HTMLInputElement;

    setParam({
      ...param,
      name: element.value
    });
  };

  const handleChnagePersonId = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;

    setParam({
      ...param,
      personId: element.value
    });
  };

  return (
    <form className="m-2">
      {/* Name */}
      <input className="border" type="text" onChange={handleChangeName} />

      {/* Person Ids */}
      <select name="person-ids" id="person-id-select" onChange={handleChnagePersonId}>
        <option value="">负责人</option>
        {users.length > 0 &&
          users.map((user: User) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
      </select>
    </form>
  );
};

export default Search;
