import React from 'react';
import { User } from './Search';

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number;
}

interface ListProps {
  list: Project[];
  users: User[];
}

const List: React.FC<ListProps> = ({ users, list }) => {
  return (
    <table className="border-separate border">
      <thead>
        <tr>
          <th className="border">名称</th>
          <th className="border">负责人</th>
        </tr>
      </thead>

      <tbody>
        {list.length > 0 &&
          list.map((project: Project) => {
            return (
              <tr className="text-center" key={project.id}>
                <td className="border">{project.name}</td>
                <td className="border">{(users.length && users.find((user) => user.id === project.personId)?.name) || '未知'}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default List;
