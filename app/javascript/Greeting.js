import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './redux/greetings/greetings';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return <div>{greeting}</div>;

}

export default Greeting;
