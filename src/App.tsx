import React from 'react';
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className='mx-auto'>
        <div className='site-header flex justify-between items-center px-8 sticky top-0 bg-white'>
          <header className='w-auto'><img
            className="w-full logo" src={logo} alt="" /></header>
          <nav>
            <ul className='flex'>
              <li className='mx-2'>
                <a href="/">Home</a>
              </li>
              <li className='mx-2'>
                <a href="/">About</a>
              </li>
              <li className='mx-2'>
                <a href="/">Portfolio</a>
              </li>
              <li className='mx-2'>
                <a href="/">Services</a>
              </li>
              <li className='mx-2'>
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='site-main py-8 bg-slate-50 mb-4'>
          <div className='site-container px-8 mx-auto max-w-7xl'>
            <div className="card rounded">
              <img className='w-auto aspect-[4/2] object-cover mb-8' width="1168" height="400" src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg" alt="" />
              <h1 className="text-3xl font-bold mb-4">
                Hello world!
              </h1>
              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore ipsum temporibus quaerat harum quam a cupiditate autem,
                fuga quo. Corrupti maxime hic
                assumenda nostrum quisquam consequuntur
                eligendi asperiores alias iste!</p>

              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore ipsum temporibus quaerat harum quam a cupiditate autem,
                fuga quo. Corrupti maxime hic
                assumenda nostrum quisquam consequuntur
                eligendi asperiores alias iste!</p>

              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore ipsum temporibus quaerat harum quam a cupiditate autem,
                fuga quo. Corrupti maxime hic
                assumenda nostrum quisquam consequuntur
                eligendi asperiores alias iste!</p>

              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolore ipsum temporibus quaerat harum quam a cupiditate autem,
                fuga quo. Corrupti maxime hic
                assumenda nostrum quisquam consequuntur
                eligendi asperiores alias iste!</p>
            </div>
          </div>
        </div>
        <footer className='site-footer'>
          <div className='site-container px-8 mx-auto max-w-7xl'>
            <div className='footer-container py-4 mb-4'>
              <p className='text-slate-400'>&copy; Copyright 2022</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
