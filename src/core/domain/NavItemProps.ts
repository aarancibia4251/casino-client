export interface NavItemProps {
  id: number;
  icon: string;
  content: NavItemContentProps;
}

export interface NavItemContentProps {
  title: string;
  footerText: string;
}
