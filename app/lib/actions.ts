'use server';

/**
 * Creates an invoice using the provided form data.
 * @param formData - The form data containing the invoice details.
 * @returns A Promise that resolves to void.
 */
export async function createInvoice(formData: FormData): Promise<void> {
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log(`rawFormData: ${rawFormData}`);
}