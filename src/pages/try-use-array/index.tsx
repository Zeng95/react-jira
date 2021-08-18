import useArray from 'hooks/useArray';
import React from 'react';

interface Person {
  name: string;
  age: number;
}

const TsReactTest: React.FC = () => {
  const persons: Person[] = [
    { name: 'jack', age: 25 },
    { name: 'ma', age: 22 }
  ];
  const { value, clear, removeIndex, add } = useArray(persons);

  // useMount(() => {
  //   // * 期待这里报错：Property 'notExist' does not exist on type '{ name: string; age: number; }[]'.
  //   console.log(value.notExist);

  //   // * 期待这里报错：Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
  //   add({ name: "david" });

  //   // * 期待这里报错：Argument of type 'string' is not assignable to parameter of type 'number'.
  //   removeIndex("123");
  // });

  return (
    <div>
      {/*期待: 点击以后增加 john */}
      <button className="border p-2 mr-4" onClick={() => add({ name: 'john', age: 22 })}>
        add john
      </button>

      {/*期待: 点击以后删除第一项*/}
      <button className="border p-2 mr-4" onClick={() => removeIndex(0)}>
        remove 0
      </button>

      {/*期待：点击以后清空列表*/}
      <button className="border p-2" style={{ marginBottom: '50px' }} onClick={() => clear()}>
        clear
      </button>

      {value.map((person, index) => (
        <div style={{ marginBottom: '30px' }} key={person.name}>
          <span style={{ color: 'red' }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};

export default TsReactTest;