import { Table } from 'antd';
import React from 'react';
import { User } from '../Search/index';

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
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      sorter: (a: Project, b: Project) => a.name.localeCompare(b.name)
    },
    {
      title: '负责人',
      render: (project: Project) => {
        return (
          <span>{(users.length && users.find((user: User) => user.id === project.personId)?.name) || '未知'}</span>
        );
      }
    }
  ];

  return <Table columns={columns} dataSource={list} />;
  // return (
  //   <table className="border-separate border">
  //     <thead>
  //       <tr>
  //         <th className="border">名称</th>
  //         <th className="border">负责人</th>
  //       </tr>
  //     </thead>

  //     <tbody>
  //       {list.length > 0 &&
  //         list.map((project: Project) => {
  //           return (
  //             <tr className="text-center" key={project.id}>
  //               <td className="border">{project.name}</td>
  //               <td className="border">{(users.length && users.find((user) => user.id === project.personId)?.name) || '未知'}</td>
  //             </tr>
  //           );
  //         })}
  //     </tbody>
  //   </table>
  // );
};

export default List;
