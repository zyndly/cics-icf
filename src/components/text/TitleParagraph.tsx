import { PropsWithChildren } from 'react';


export default function SubHeading  ({ children }: PropsWithChildren) {
  return (
    
      <h3 className='text-primary-800 mb-1'>
        {children}
      </h3>
    
  );
};
