import localFont from 'next/font/local';

// Chillax font definitions
export const chillaxVariable = localFont({
  src: '../public/fonts/chillax/Chillax-Variable.woff2',
  variable: '--font-chillax-variable',
  display: 'swap',
});

export const chillaxRegular = localFont({
  src: '../public/fonts/chillax/Chillax-Regular.woff2',
  variable: '--font-chillax-regular',
  display: 'swap',
});

export const chillaxMedium = localFont({
  src: '../public/fonts/chillax/Chillax-Medium.woff2',
  variable: '--font-chillax-medium',
  display: 'swap',
});

export const chillaxSemibold = localFont({
  src: '../public/fonts/chillax/Chillax-Semibold.woff2',
  variable: '--font-chillax-semibold',
  display: 'swap',
});

export const chillaxBold = localFont({
  src: '../public/fonts/chillax/Chillax-Bold.woff2',
  variable: '--font-chillax-bold',
  display: 'swap',
});

export const chillaxLight = localFont({
  src: '../public/fonts/chillax/Chillax-Light.woff2',
  variable: '--font-chillax-light',
  display: 'swap',
});

// Array font definitions
export const arrayRegular = localFont({
  src: '../public/fonts/array/Array-Regular.woff2',
  variable: '--font-array-regular',
  display: 'swap',
});

export const arraySemibold = localFont({
  src: '../public/fonts/array/Array-Semibold.woff2',
  variable: '--font-array-semibold',
  display: 'swap',
});

export const arrayBold = localFont({
  src: '../public/fonts/array/Array-Bold.woff2',
  variable: '--font-array-bold',
  display: 'swap',
});

export const arrayWide = localFont({
  src: '../public/fonts/array/Array-Wide.woff2',
  variable: '--font-array-wide',
  display: 'swap',
});

// Font collections for layout
export const chillax = [
  chillaxVariable.variable,
  chillaxRegular.variable,
  chillaxMedium.variable,
  chillaxSemibold.variable,
  chillaxBold.variable,
  chillaxLight.variable,
].join(' ');

export const array = [
  arrayRegular.variable,
  arraySemibold.variable,
  arrayBold.variable,
  arrayWide.variable,
].join(' '); 