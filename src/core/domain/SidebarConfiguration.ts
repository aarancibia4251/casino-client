export interface SidebarConfiguration {
  id: string;
  userName: string;
  quickAccess: SidebarConfigurationQuickAccess;
  modules: SidebarConfigurationModule[];
}

export interface SidebarConfigurationQuickAccess {
  id: string;
  img: string;
  title: string;
  links: SidebarConfigurationLink[];
  isOpen?: boolean;
}

export interface SidebarConfigurationModule {
  id: string;
  title: string;
  subModules: SidebarConfigurationSubModule[];
}

export interface SidebarConfigurationLink {
  title: string;
  link: string;
}

export interface SidebarConfigurationSubModule {
  id: string;
  title: string;
  links: SidebarConfigurationLink[];
  isOpen?: boolean;
  icon?: string;
  img?: string;
  counter?: number;
}
