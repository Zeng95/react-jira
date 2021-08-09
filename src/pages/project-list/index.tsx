import useDebounce from 'hooks/useDebounce';
import useMount from 'hooks/useMount';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { cleanObject } from 'utils';
import List, { Project } from './components/List';
import Search, { Param, User } from './components/Search';

// * 使用 JavaScript 的同学，大部分的错误都是在 runtime 发现的
// * 我们希望在静态代码中，就能找到其中的一些错误
const apiURL = process.env.REACT_APP_API_URL;

const ProjectListPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [param, setParam] = useState<Param>({ name: '', personId: '' });
  const [projects, setProjects] = useState<Project[]>([]);

  const debouncedParam = useDebounce(param, 5000);

  const fetchUsers = async () => {
    try {
      const response = await window.fetch(`${apiURL}/users`);
      const data = await response.json();

      if (response.ok) {
        if (data) {
          setUsers(data);
        } else {
          throw new Error('No users found');
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e.message);
      }
    }
  };

  useMount(fetchUsers);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await window.fetch(`${apiURL}/projects?${qs.stringify(cleanObject(debouncedParam))}`);
        const data = await response.json();

        if (response.ok) {
          if (data) {
            setProjects(data);
          } else {
            throw new Error('No projects found');
          }
        }
      } catch (e) {
        if (e instanceof Error) {
          throw new Error(e.message);
        }
      }
    };

    fetchProjects();
  }, [debouncedParam]);

  return (
    <>
      <Search users={users} param={param} setParam={setParam} />
      <List users={users} list={projects} />
    </>
  );
};

export default ProjectListPage;
