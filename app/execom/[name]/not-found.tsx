import Link from 'next/link';
import { UserX } from 'lucide-react';

export default function ExecomMemberNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <UserX className="h-10 w-10 text-[#D4AF37]/60" />
      <h1 className="mt-6 text-2xl font-semibold text-white">Member not found</h1>
      <p className="mt-2 max-w-sm text-sm text-white/50">
        We couldn&apos;t find an Executive Committee member with that profile.
      </p>
      <Link 
        href="/execom"
        className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/80"
      >
        Back to Executive Committee
      </Link>
    </main>
  );
}