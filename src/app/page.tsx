import { productsServerService } from '@/services/products/productsServerService';
import { MainPage } from '@/components/pages/MainPage/MainPage';

const HomePage = async () => {
  const data = await productsServerService.getProducts();

  return (
    <MainPage
      preloadedProducts={data.data}
      productsTotalCount={data.total}
      productsShownCount={data.page * data.count}
    />
  );
};

export default HomePage;
