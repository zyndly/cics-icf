import { PropsWithChildren } from 'react';


export default function SubHeading  ({ children }: PropsWithChildren) {
  return (
    
      <h1 className='text-primary-800 mb-2 mt-10'>
        {children}
      </h1>
    
  );
};
