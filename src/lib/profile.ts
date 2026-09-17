export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export const profile = {
  name: "양상훈",
  bio: "코드와 커피, 운동을 좋아합니다",
  avatarInitial: "양",
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com/thrkrif" },
  { id: "velog", label: "Velog", url: "https://velog.io/@thrkrif" },
];
