import { Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;

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

  const handleChnagePersonId = (value: string) => {
    setParam({
      ...param,
      personId: value
    });
  };

  return (
    <form className="m-2">
      {/* Name */}
      <Input className="border" type="text" onChange={handleChangeName} />

      {/* Person Ids */}
      <Select value={param.personId} onChange={handleChnagePersonId}>
        <Option value="">负责人</Option>
        {users.length > 0 &&
          users.map((user: User) => (
            <Option key={user.id} value={user.id}>
              {user.name}
            </Option>
          ))}
      </Select>
    </form>
  );
};

export default Search;
