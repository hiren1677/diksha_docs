import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Yellowbar from '../components/common/Yellowbar';
import DashboardView from './dashboard/DashboardView';

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <Yellowbar />
      <DashboardView />
    </MainLayout>
  );
};

export default Dashboard;
