import { NextRequest, NextResponse } from 'next/server';

import { checkoutServerService } from '@/services/checkout/checkoutServerService';
import { CheckoutRequest } from '@/services/checkout/types';

export async function POST(request: NextRequest) {
  const data = (await request.json()) as CheckoutRequest;

  try {
    const response = await checkoutServerService.createCheckout(data);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
