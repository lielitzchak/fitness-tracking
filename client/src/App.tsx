import "./index.css";
import AppProvider from "./Context/Appcontext";
import RouteApp from "./Router/routeApp.component";
import Footer from "./Components/Layout/Footer/Footer.component";
function App() {
  return (
    <>
      {/* <AuthProvider> */} {/* authorization for the all app */}
      {/* <ThemeProvider> */} {/*  theme for the all app  */}
      <RouteApp />
      <Footer />
      {/*need to be inside router app */}
      {/*  router for the all app  */}
      {/* </ThemeProvider> */}
      {/* </AuthProvider> */}
    </>
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
