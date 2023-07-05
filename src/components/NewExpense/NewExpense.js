import "./NewExpense.css";
import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isSwitched, setIsSwitched] = useState(false);
  const saveExpenseHandler = (enteredExpenses)=>{
    const expenseData = {
      ...enteredExpenses, id:Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsSwitched(false)
  }

  const switchHandler = ()=>{
    setIsSwitched(true);
  }

  const cancelEditingHandler =()=>{
    setIsSwitched(false)
  }

  return (
    <div className="new-expense">
      {!isSwitched && <button onClick={switchHandler}>Add New Expense</button>}
      {isSwitched && <ExpenseForm onSaveExpenseForm={saveExpenseHandler}  onCancel={cancelEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
