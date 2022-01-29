import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem({title, amount, date}) {
    const [titleValue, setTitleValue] = useState(title);

    const clickHandler = () => {
        setTitleValue("new title!");
    };

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={date}/>
                <div className="expense-item__description">
                    <h2>{titleValue}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    )
}

export default ExpenseItem;