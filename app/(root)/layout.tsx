import { Metadata } from 'next';
import Header_45 from '@/components/shared/header_45';
import footer_45 from '@/components/shared/footer_45';

export const metadata: Metadata = {
  title: 'tku_45',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header_45 />
      <main className='flex-1 wrapper'>{children}</main>
    </div>
  );
}
