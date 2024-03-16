'use client';
import { SignInButton } from './sign-in-button';
import Image from 'next/image';

export function SignInForm({ callbackUrl }: { callbackUrl?: string }) {
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <SignInButton
        provider="azure-ad"
        callbackUrl={callbackUrl}
        className="bg-white border-2 border-blue-800 text-blue-800 font-bold p-2 rounded shadow-xl"
      >
        <Image src="/images/entra-id.svg" alt="Azure AD" width={32} height={32} className="inline-block mx-2" />
        Sign in with Microsoft Entra ID
      </SignInButton>
    </div>
  );
}
