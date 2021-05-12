import {useState} from 'react';
import Title from './components/Title.jsx';
import Content from './components/Content.jsx';
import ChoiceList from './components/ChoiceList';
import story from './story.js';


function App() {
  const [chapterId,setChapterId] = useState(1);
  const [choiceHistory,setChoiceHistory] = useState([]);
  const newChapter = story.find(elt => elt.id === chapterId);
 
    const selectChoice = (id,choice) =>{
      setChapterId(id);
      setChoiceHistory(prevChoices => [...prevChoices, choice]);
    }
    
    const onReset = ()=>{
      setChapterId(1);
      setChoiceHistory([])
    }





   if(!newChapter){
    return (
    <div>
      <h1> End of the story</h1>
    </div>
    )
   }
  const text = newChapter.content;
  const chapter = newChapter.chapter;
  const book= newChapter.title;
  const choices = newChapter.choices;
  return (
    <div className="container">
      <div>
      <button onClick={onReset} >Restart </button>
       {choiceHistory.map((choice,index )=> <p key={index}>{choice}</p>)}
        <Title book={book} chapter={chapter}/>
        <Content text={text}/>
      </div>
      <div>
        <ChoiceList choices={choices} 
                    handleClick={selectChoice}
        />
      </div>
    </div>
  );
}

export default App;
