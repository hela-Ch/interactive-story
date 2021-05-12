import styles from'./choiceList.module.css';
const ChoiceList =({choices,handleClick})=> {

/*const selectChoice =(target)=>{
    handleClick(target);
    console.log(target);
}*/

    return(
        <div className="choiceContainer ">
        {choices.map((choice ,index)=> 
            <p 
               key={index} 
               onClick={() => handleClick(choice.target,choice.content)}
               className={styles.choice}
            > 
             {choice.content} 
            </p>
        )}
        </div>
    )
}

export default ChoiceList;