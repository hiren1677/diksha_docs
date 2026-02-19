import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Yellowbar from '../components/common/Yellowbar';
import AboutHeading from './about/AboutHeading';
import AboutDescription from './about/AboutDescription';
import AboutGlance from './about/AboutGlance';
import AboutStateofArt from './about/AboutStateofArt';
import AboutDocuments from './about/AboutDocuments';

const About: React.FC = () => {
  return (
    <MainLayout>
      <Yellowbar />
      <AboutHeading />
      <AboutDescription />
      <AboutGlance />
      <AboutStateofArt />
      <AboutDocuments />
    </MainLayout>
  );
};

export default About;