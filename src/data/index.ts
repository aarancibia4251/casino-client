import UserPhoto from "../assets/images/users/1.jpg";
import Profile from "../assets/images/users/profile.png";
import { SidebarConfiguration } from "../core/domain/SidebarConfiguration";

export const navItems = [
  {
    id: 1,
    icon: "mdi mdi-message",
    content: {
      title: "Notifications",
      messages: [
        {
          title: "Luanch Admin",
          message: "Just see the my new admin!",
          icon: "fa fa-link",
          type: "danger",
          img: "",
          status: "",
        },
      ],
      footerText: "Check all notifications",
    },
  },
  {
    id: 2,
    icon: "mdi mdi-email",
    content: {
      title: "You have 4 new messages",
      messages: [
        {
          title: "Pavan kumar",
          message: "Just see the my admin!",
          img: UserPhoto,
          status: "online",
          icon: "",
          type: "",
        },
      ],
      footerText: "See all e-Mails",
    },
  },
];

export const sidebarItems: SidebarConfiguration = {
  id: "1",
  userName: "Alexis Arancibia",
  quickAccess: {
    id: "1",
    img: Profile,
    title: "Alexis Arancibia",
    links: [
      {
        title: "My Profile",
        link: "",
      },
      {
        title: "My Balance",
        link: "",
      },
      {
        title: "Inbox",
        link: "",
      },
      {
        title: "Account Setting",
        link: "",
      },
      {
        title: "Logout",
        link: "",
      },
    ],
  },
  modules: [
    {
      id: "1",
      title: "PERSONAL",
      subModules: [
        {
          id: "1",
          icon: "mdi-gauge",
          title: "Dashboard",
          counter: 4,
          links: [
            {
              title: "Minimal",
              link: "",
            },
            {
              title: "Analytical",
              link: "",
            },
            {
              title: "Demographical",
              link: "",
            },
          ],
        },
        {
          id: "2",
          icon: "mdi-bullseye",
          title: "Apps",
          links: [
            {
              title: "Calendar",
              link: "",
            },
            {
              title: "Chat app",
              link: "",
            },
            {
              title: "Support Ticket",
              link: "",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      title: "FORMS, TABLE &amp; WIDGETS",
      subModules: [
        {
          id: "1",
          icon: "mdi-file",
          title: "Forms",
          counter: 4,
          links: [
            {
              title: "Basic Forms",
              link: "",
            },
            {
              title: "Form Layouts",
              link: "",
            },
            {
              title: "Form Addons",
              link: "",
            },
          ],
        },
        {
          id: "2",
          icon: "mdi-table",
          title: "Tables",
          links: [
            {
              title: "Basic Tables",
              link: "",
            },
            {
              title: "Table Layouts",
              link: "",
            },
            {
              title: "Data Tables",
              link: "",
            },
          ],
        },
      ],
    },
  ],
};
