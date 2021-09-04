import React from 'react';

type Person = {
  name: string;
  age: number;
};

const xiaoming: Partial<Person> = {};
const shenMiRen: Omit<Person, 'name'> = { age: 8 };

const Abc: React.FC = () => {
  console.log(xiaoming, shenMiRen);
  return <div>Hello</div>;
};

export default Abc;
