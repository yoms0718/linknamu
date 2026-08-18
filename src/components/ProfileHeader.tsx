import Image from "next/image";
import type { Profile } from "@/lib/links";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-24 w-24 overflow-hidden rounded-full border border-black/10 dark:border-white/15">
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          width={96}
          height={96}
          className="h-full w-full object-cover"
        />
      </div>
      <h1 className="text-lg font-semibold">{profile.name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
    </div>
  );
}
