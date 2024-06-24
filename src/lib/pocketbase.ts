import PocketBase from 'pocketbase';

const url = 'https://hell.pockethost.io/';
export const pb = new PocketBase(url);

export const isUserValid = pb.authStore.isValid;
