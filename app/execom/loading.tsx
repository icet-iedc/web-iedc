import { Skeleton } from '@/components/ui/skeleton';

export default function ExecomLoading() {
  return (
    <main className="min-h-screen bg-black px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Skeleton className="mx-auto h-10 w-64 bg-white/10" />
          <Skeleton className="mx-auto mt-4 h-4 w-96 bg-white/5" />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Skeleton className="mx-auto h-24 w-24 rounded-full bg-white/10" />
              <Skeleton className="mx-auto mt-4 h-4 w-24 bg-white/10" />
              <Skeleton className="mx-auto mt-2 h-3 w-16 bg-white/5" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}