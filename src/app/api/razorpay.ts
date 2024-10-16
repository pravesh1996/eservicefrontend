// import { NextResponse } from 'next/server';
// import Razorpay from 'razorpay';

// export async function POST() {
//   try {
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY_ID,  // Store in .env.local
//       key_secret: process.env.RAZORPAY_KEY_SECRET,  // Store in .env.local
//     });

//     const options = {
//       amount: 2000,  // Amount is in the smallest currency unit (paise for INR). This is ₹20.
//       currency: 'INR',
//       receipt: 'order_rcptid_11',
//     };

//     const order = await razorpay.orders.create(options);
//     return NextResponse.json({ orderId: order.id });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to create order' });
//   }
// }
