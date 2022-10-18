import * as React from 'react';

import Container from '@/components/layout/Container';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TitleParagraph from '@/components/text/TitleParagraph';



export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo 
        templateTitle='Project Management October 15, 2022'
        description='Attendees of the Seminar entitled "{change to seminar title}"'
      />

      <main className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div> {/* Left Side /> */}
          <Container>
            <TitleParagraph>
              Seminar on Project Management
            </TitleParagraph>
            <p>
              October 15, 2020
            </p>

          </Container>

        </div>
        
        <div className='lg:mt-10'> {/* Right Side /> */}
        <Container>
          <div className='flex flex-row items-center space-x-4'>


          </div>

        </Container>
        </div>
        


      </main>

      
    </Layout>
  );
}
