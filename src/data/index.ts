import UserPhoto from "../assets/images/users/1.jpg";
import Profile from "../assets/images/users/profile.png";
import { SidebarConfiguration } from "../core/ui/interfaces/SidebarConfiguration";

export const navItems = [
  {
    id: 1,
    icon: "mdi mdi-message",
    isOpen: false,
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
    isOpen: false,
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
  {
    id: 3,
    icon: "",
    image: UserPhoto,
    isOpen: false,
    content: {
      title: "",
      messages: [],
      footerText: "",
    },
    template: `
      <li>
                <div className="dw-user-box">
                  <div className="u-img">
                    <img
                      src={UserPhoto}
                      alt="user"
                    />
                  </div>
                  <div className="u-text">
                    <h4>Steave Jobs</h4>
                    <p className="text-muted">varun@gmail.com</p>
                    <a
                      href="pages-profile.html"
                      className="btn btn-rounded btn-danger btn-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
              <li role="separator" className="divider"></li>
              <li role="separator" className="divider"></li>
              <li>
                <a href="/">
                  <i className="ti-settings"></i> Atras
                </a>
              </li>
              <li role="separator" className="divider"></li>
              <li>
                <a href="/">
                  <i className="fa fa-power-off"></i> Logout
                </a>
              </li>
    `,
  },
];

export const sidebarItems: SidebarConfiguration = {
  id: "1",
  userName: "Alexis Arancibia",
  quickAccess: {
    id: 1,
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
          id: 1,
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
          id: 2,
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
          id: 1,
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
          id: 2,
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
