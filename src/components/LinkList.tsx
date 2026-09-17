import { links } from "@/lib/profile";
import { LinkCard } from "@/components/LinkCard";

export function LinkList() {
  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} />
        </li>
      ))}
    </ul>
  );
}
