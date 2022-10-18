import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';


export default function Template() {
  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-blue-700'>
          <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Coming Soon</h1>
          
        </div>
      </section>
    </main>
      
  );
}