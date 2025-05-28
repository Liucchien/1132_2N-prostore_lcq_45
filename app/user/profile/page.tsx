import { Metadata } from 'next';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import ProfileForm_45 from './profile-form_45';

export const metadata: Metadata = {
  title: 'Customer Profile',
};

const ProfilePage_45 = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className='max-w-md mx-auto space-y-4 p-4'>
        <h1 className='h2-bold'>Profile</h1>
        <ProfileForm_45 />
      </div>
    </SessionProvider>
  );
};

export default ProfilePage_45;
