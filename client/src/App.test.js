import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import { platform } from 'os';

test("renders App without crashing", () => {
  render(<App />);

});

// test('name is rendered', () =>{
//   const { getByTestId } = render(<App/>);
//   const playerName = getByTestId(/name header/i);
//   expected(playerName).toBeInTheDocument();
 
//    });



test("nav h1 is rendered", () =>{
  const { getByText } = render(<App/>);
  const header = getByText(/Women's World Cup/i)
  
})