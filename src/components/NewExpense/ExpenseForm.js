import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = ({onSaveExpenseData, onFormCancel}) => {
    const [titleValue, setTitleValue] = useState('');
    const [amountValue, setAmountValue] = useState(0.01);
    const [dateValue, setDateValue] = useState("");
    // const [userInput, setUserInput] = useState({
    //     titleValue: "",
    //     amountValue: "",
    //     dateValue: ""
    // })

    const titleChangeHandler = (event) => {
        setTitleValue(event.target.value);
        // setUserInput(prevState => {
        //     return {
        //         ...prevState,
        //         titleValue: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setAmountValue(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDateValue(event.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();

        const expenseData = {
            title: titleValue,
            amount: +amountValue,
            date: new Date(dateValue)
        }

        onSaveExpenseData(expenseData);

        setTitleValue('');
        setAmountValue(0.01);
        setDateValue('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input required type="text" value={titleValue} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input required type="number" value={amountValue} onChange={amountChangeHandler} min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input required type="date" value={dateValue} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={onFormCancel} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;