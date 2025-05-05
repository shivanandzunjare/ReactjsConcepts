import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset , incrementByAmount} from './features/counter/counterSlice';

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());

  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleDecrementClick() {
    dispatch(decrement())
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(amount))
  }
 
  return (
    <>
    <div className='container'>
      <button onClick={handleIncrementClick} > + </button>
      <p>Count : {count}</p>
      <button  onClick={handleDecrementClick}> - </button>
      <br></br>
      <button  onClick={handleResetClick}> Reset </button>
      <input type='Number' 
      value={amount}
      placeholder='Enter Amount'
      onChange={(e) => setAmount(e.target.value)}></input>

       <button  onClick={handleIncAmountClick}> Inc by amount </button>
    
    </div>
          </>
  )
}

export default App