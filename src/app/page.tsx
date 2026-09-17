import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-sky-100 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white/60 bg-white/50 p-8 shadow-xl shadow-sky-500/10 backdrop-blur-lg sm:p-10">
        <ProfileHeader />
        <LinkList />
      </div>
    </main>
  );
}
