'use server';

import { cookies } from 'next/headers';

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete('authToken');
  console.log('Logout successful');
}