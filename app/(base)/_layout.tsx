import { Slot } from 'expo-router';
import MainLayout from '@/components/layout/MainLayout';

const BaseLayout = () => {
  return (
    <>
      <MainLayout>
        <Slot />
      </MainLayout>
    </>
  );
};

export default BaseLayout;
