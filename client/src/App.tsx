import "./index.css";
import Home from "./Components/Home/Home.component";
import AppProvider from "./Context/Appcontext";
import RouteApp from "./Router/routeApp.component";

function App() {
  return (
    <Home />
    // <AppProvider>
    //   <RouteApp />
    // </AppProvider>
  );
}

export default App;

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
