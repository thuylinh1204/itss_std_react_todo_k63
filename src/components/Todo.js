import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = useStorage();

  const handleAdd = (text) => {
    const newsItems = [...items, { key: getKey(), text: text, done: false }]
    putItems(newsItems)
  }
  
  const handleCheck = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    putItems(newItems);
  };

  const [state, setState] = useState('hidden');
  const [data, setData] = useState('');

  const onAddItems = (data) => {
    putItems(items.push({
      key: getKey(),
      text: data,
      done: false
    }));
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
       <Input handleAdd={handleAdd} />
      {items.map(item => (
        <TodoItem 
          key={item.key}
          item={item}
          onCheck = {handleCheck}
        />
      ))}
    </div>  
  );
}

export default Todo;