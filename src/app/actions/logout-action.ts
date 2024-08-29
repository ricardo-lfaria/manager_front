"use server";

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logoutAction() {
  const cookiesList = cookies();
  cookiesList.delete('authToken');
  cookiesList.delete('isAdmin');
  redirect('/login'); 
}
