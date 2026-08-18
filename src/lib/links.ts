export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

// TODO: 실제 프로필/링크 값으로 교체
export const profile: Profile = {
  name: "홍길동",
  bio: "한 줄 소개를 입력해 주세요",
  avatarUrl: "/avatar-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com/" },
  { id: "blog", title: "Blog", url: "https://example.com/" },
];
