import { NextResponse } from 'next/server';
import { productsServerService } from '@/services/products/productsServerService';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';

  const data = await productsServerService.getProducts({ page: Number(page) });

  return NextResponse.json(data);
}
