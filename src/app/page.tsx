import { ProfileHeader } from "@/components/ProfileHeader";
import { LinkList } from "@/components/LinkList";
import { FloatingDots } from "@/components/FloatingDots";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-sky-100 px-6 py-12">
      <FloatingDots />
      <div className="profile-card relative z-10 w-full max-w-md rounded-3xl border border-white/60 bg-white/50 p-8 shadow-xl shadow-sky-500/10 backdrop-blur-lg transition-[transform,box-shadow] duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 sm:p-10">
        <ProfileHeader />
        <LinkList />
      </div>
    </main>
  );
}
