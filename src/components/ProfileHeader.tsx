import { profile } from "@/lib/profile";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-400 text-4xl font-bold text-white shadow-lg shadow-sky-500/30 sm:h-28 sm:w-28">
        {profile.avatarInitial}
      </div>
      <h1 className="mb-2 text-2xl font-bold text-slate-800 sm:text-3xl">
        {profile.name}
      </h1>
      <p className="mb-8 text-base text-slate-600 sm:text-lg">{profile.bio}</p>
    </div>
  );
}
