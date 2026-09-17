export interface LinkItem {
  id: string;
  label: string;
  url: string;
  iconPath: string;
}

export const profile = {
  name: "양상훈",
  bio: "코드와 커피, 운동을 좋아합니다",
  avatarInitial: "양",
  tags: ["커피", "운동"],
};

const GITHUB_ICON_PATH =
  "M12 0.5C5.65 0.5 0.5 5.66 0.5 12.03c0 5.09 3.29 9.4 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.78 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.68.8.56A10.53 10.53 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z";

const VELOG_ICON_PATH = "M2 3h4.2l5.3 12.6L16.8 3H21l-8.2 18H10.2L2 3Z";

export const links: LinkItem[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/thrkrif",
    iconPath: GITHUB_ICON_PATH,
  },
  {
    id: "velog",
    label: "Velog",
    url: "https://velog.io/@thrkrif",
    iconPath: VELOG_ICON_PATH,
  },
];
