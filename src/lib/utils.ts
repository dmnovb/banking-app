import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const ccn = (n: string) => {
  const ns = n.split(' ');

  for (let i = 0; i < 3; i++) {
    ns[i] = '****';
  }

  return ns.join(' ');
};
