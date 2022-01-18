import { useState } from "react";
import'./ExpenseForm.css'
const ExpenseForm=()=>{
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });  
  const titleChangeHandler =(event)=>{
      setUserInput({
          ...userInput,
          title:event.target.value
      })

};
  const amountChangeHandler =(event)=>{
      setUserInput({
          ...userInput,
          amount:event.target.value
      })

};
  const dateChangeHandler =(event)=>{
      setUserInput({
          ...userInput,
          date:event.target.value
      })

};
const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);

}   
return(
    <div>
        <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" onChange={titleChangeHandler}  />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
           name="amount"
            type="number" 
            min="0.1" step="1" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input name="date " type="date"  onChange={dateChangeHandler}  />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
    
    </div>
)
}
export default ExpenseForm