import { Skeleton } from '@/components/ui/skeleton';

export default function ExecomProfileLoading() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Skeleton className="h-4 w-48 bg-white/10" />
        <div className="mt-10 grid gap-10 md:grid-cols-[320px_1fr] md:items-center">
          <Skeleton className="mx-auto h-72 w-72 rounded-3xl bg-white/10 md:mx-0 md:h-80 md:w-80" />
          <div className="space-y-4 text-center md:text-left">
            <Skeleton className="mx-auto h-6 w-24 rounded-full bg-white/10 md:mx-0" />
            <Skeleton className="mx-auto h-10 w-64 bg-white/10 md:mx-0" />
            <Skeleton className="mx-auto h-4 w-40 bg-white/5 md:mx-0" />
          </div>
        </div>
      </div>
    </main>
  );
}