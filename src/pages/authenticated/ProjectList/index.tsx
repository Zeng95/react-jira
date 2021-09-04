import { useAuth } from 'context/auth';
import useDebounce from 'hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { SUCCESS_OK } from 'services/config';
import { getProjects } from 'services/projects';
import { getUsers } from 'services/users';
import { cleanObject } from 'utils';
import List, { Project } from './components/List/index';
import Search, { User } from './components/Search/index';

// * 使用 JavaScript 的同学，大部分的错误都是在 runtime 发现的
// * 我们希望在静态代码中，就能找到其中的一些错误

const ProjectList: React.FC = () => {
  const { logout } = useAuth();

  const [users, setUsers] = useState<User[]>([]);
  const [param, setParam] = useState({ name: '', personId: '' });
  const [projects, setProjects] = useState<Project[]>([]);

  const debouncedParam = useDebounce(param, 5000);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        if (response.status === SUCCESS_OK && response.data) {
          setUsers(response.data);
        }
      } catch (e) {
        // * axios 和 fetch 表现不一样，axios 可以直接在返回状态不为 2xx 的时候抛出异常
        logout();
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects(cleanObject(debouncedParam));
        if (response.status === SUCCESS_OK && response.data) {
          setProjects(response.data);
        }
      } catch (e) {
        // * axios 和 fetch 表现不一样，axios 可以直接在返回状态不为 2xx 的时候抛出异常
        logout();
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

export default ProjectList;
