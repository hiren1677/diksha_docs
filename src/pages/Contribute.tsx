import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Yellowbar from '../components/common/Yellowbar';
import ContributeHeading from './contribute/ContributeHeading';
import ContributeExploreVidhyadaan from './contribute/ContributeExploreVidhyadaan';
import ContributeAboutVidhyadaan from './contribute/ContributeAboutVidhyadaan';
import ContributeElearningResources from './contribute/ContributeElearningResources';

const Contribute: React.FC = () => {
  return (
    <MainLayout>
      <Yellowbar />
      <ContributeHeading />
      <ContributeExploreVidhyadaan />
      <ContributeAboutVidhyadaan />
      <ContributeElearningResources />
    </MainLayout>
  );
};

export default Contribute;
