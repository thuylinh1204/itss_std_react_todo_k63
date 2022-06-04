import { useState } from 'react';
/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ handleFilterChange}) {
  const [tabs, setTabs] = useState([
    {text : 'すべて', active : true}, 
    {text : '未完了', active : false}, 
    {text : '完了済み', active : false},
  ])

  const handleSetTabs = (text) => {
    handleFilterChange(text)

    setTabs((prevState) => {
      return prevState.map(value => {
        if(value.text === text) {
          value.active = true;
        }else{
          value.active = false;
        }

        return value;
      })
    })
  }

  return (
    <div className="panel-tabs">
      <ul>
        {tabs.map((tab, index) => (
          <i 
            onClick={() => handleSetTabs(tab.text)} 
            key={index} 
            className={tab.active ? 'is-active' : ''}
          >
           &emsp;{tab.text}
          </i>
        ))}
      </ul>
    </div>
  );
}

export default Filter