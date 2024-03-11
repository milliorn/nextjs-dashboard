'use server';

import { z } from 'zod';
import Form from '../ui/invoices/create-form';
import { sql } from '@vercel/postgres';

/**
 * Represents the form schema for a specific action.
 */
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.number(),
  status: z.enum([ 'paid', 'pending', 'draft' ]),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

/**
 * Creates an invoice using the provided form data.
 * @param formData - The form data containing the invoice details.
 * @returns A Promise that resolves to void.
 */
export async function createInvoice(formData: FormData): Promise<void> {
  const { customerId, amount, status } = CreateInvoice.parse(formData);

  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };

  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[ 0 ];

  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;

  console.log('Creating invoice with data:', rawFormData);
}
