import "./App.css";
// import AppProvider from "./Context/Appcontext";
// import RouteApp from "./Router/routeApp.component";

function App() {
  return (
    <div>
      <section>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1>gym</h1>
      </section>
      <section>
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        /> <h1>food</h1>
        
      </section>
      <section>
        <img src="" alt="" />
        <h1>report</h1>
      </section>
      <section>
        <img
          src="https://images.unsplash.com/photo-1575153409612-907131447a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlY2lwZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <h1>recipe</h1>
      </section>
    </div>

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
