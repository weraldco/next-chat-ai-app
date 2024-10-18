'use client';
import { NextUIProvider } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
