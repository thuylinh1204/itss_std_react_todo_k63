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
  const [tab, setTab] = useState('すべて')

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

  const handleFilterChange = (text) => {
    setTab(text)
  }

  const displayItems = () => {
    let newItems;
    if (tab === 'すべて') {
      newItems = items.filter(item => {
        return true;
      });
    }

    if (tab === '未完了') {
      newItems = items.filter(item => {
        return !item.done;
      });
    }

    if (tab === '完了済み') {
      newItems = items.filter(item => {
        return item.done;
      });
    }

    return newItems;
  }


  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
       <Input handleAdd={handleAdd} />
      <Filter handleFilterChange={handleFilterChange} />
      {displayItems().map(item => (
        <TodoItem 
          handleCheck = {handleCheck}
          key={item.key}
          item={item}
        />
      ))}
       <div className="panel-block">
        {displayItems().length} items
      </div>
    </div>  
  );
}

export default Todo;