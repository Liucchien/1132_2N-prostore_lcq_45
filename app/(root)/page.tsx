// import sampleData from '@/db/sample-data';
import ProductList_45 from '@/components/shared/product_45/product-list_45';
import { getLatestProducts_xx } from '@/lib/actions/product.action_45';

// const delay = (ms) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });

const HomePage_45 = async () => {
  // await delay(5000);
  // console.log('sampleData', sampleData);
  const latestProducts = await getLatestProducts_xx();
  return (
    <>
      <ProductList_45 data={latestProducts} title='Newest Arrival' limit={4} />
    </>
  );
};
export default HomePage_45;
