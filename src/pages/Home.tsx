import React from 'react';
import MainLayout from '../layouts/MainLayout';
import HomepageBanners from './home/HomepageBanners';
import BrowsebyContent from './home/BrowsebyContent';
import BrowsebySubject from './home/BrowsebySubject';
import BrowsebyGrade from './home/BrowsebyGrade';
import BrowsebyTenant from './home/BrowsebyTenant';
import FocusAreasofDiksha from './home/FocusAreasofDiksha';
import OurCommunity from './home/OurCommunity';
import DownloadDikshaApp from './home/DownloadDikshaApp';


const Home: React.FC = () => {
  return (
    <MainLayout>
      <BrowsebyContent />
      <BrowsebySubject />
      <HomepageBanners />
      <BrowsebyGrade />
      <BrowsebyTenant />
      <FocusAreasofDiksha />
      <OurCommunity />
      <DownloadDikshaApp />
    </MainLayout>
  );
};

export default Home;
