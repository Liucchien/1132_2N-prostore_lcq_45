import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { EllipsisVertical, ShoppingCart, UserIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Modetoggle_45 from './mode-toggle_45';
import Menu_xx from './menu_xx';

const Header_45 = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/'>
            <Image
              src='/images/logo.svg'
              height={48}
              width={48}
              priority={true}
              alt={`${APP_NAME} logo`}
            />
          </Link>
        </div>
        <Menu_xx />
        {/* <div className='flex justify-end gap-3'>
          <Modetoggle_45 />
          <Button asChild variant='outline'>
            <Link href='/cart_45'>
              <ShoppingCart /> Cart_45
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <ShoppingCart /> Sign in
            </Link>
          </Button>
        </div> */}
      </div>
    </header>
  );
};

export default Header_45;
