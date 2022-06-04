import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( { handleAdd } ) {
const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      handleAdd(text)

      setText('')
    }
  }

  
  return (
    <div className="panel-block">
       <input
        className="input"
        type="text"
        placeholder="ToDoを入力してください"
        value={text}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Input;
