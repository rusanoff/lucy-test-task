import { Metadata } from 'next';
import { productsServerService } from '@/services/products/productsServerService';
import { ProductPage } from '@/components/pages/ProductPage/ProductPage';

export const generateMetadata = async ({ params }: { params: { productId: string } }): Promise<Metadata> => {
  const { productId } = params;

  const data = await productsServerService.getProductDetail(Number(productId));
  const { name } = data;

  return {
    title: name,
    description: name,
  };
};

type ProductPageProps = {
  params: {
    productId: string;
  };
};

const ProductDetailPage = async (props: ProductPageProps) => {
  const {
    params: { productId },
  } = props;

  const product = await productsServerService.getProductDetail(Number(productId));

  return (
    <main>
      <ProductPage product={product} />
    </main>
  );
};

export default ProductDetailPage;
