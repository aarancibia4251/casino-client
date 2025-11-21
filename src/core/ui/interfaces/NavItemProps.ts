export interface NavItemProps {
  id: number;
  icon: string;
  isOpen: boolean;
  content: NavItemContentProps;
  template?: string;
}

export interface NavItemContentProps {
  title: string;
  messages: Partial<NavItemContentMessageProps[]>;
  footerText: string;
}

export interface NavItemContentMessageProps {
  title: string;
  message: string;
  img: string;
  status: string;
  icon: string;
  type: string;
}
