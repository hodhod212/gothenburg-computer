import { Button, ButtonGroup, Typography } from '@mui/material';
//import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { increment,decrement } from './counterSlice';
//import { CounterState, increment, decrement } from './counterReducer';

export default function ContactPage() {
  //const {data,title}=useSelector((state:CounterState)=>state);
  const { data, title } = useAppSelector(state=>state.counter);
  //const dispatch=useDispatch();
  const dispatch = useAppDispatch();
  return (
    <>
      <Typography variant="h2">{data}</Typography>
      <Typography variant="h2">{title}</Typography>

      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment(1))}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => dispatch(decrement(1))}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(increment(5))}
        >
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}
