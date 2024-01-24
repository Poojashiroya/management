import Icons from "../../Icons";
import Images from "../../Images";
import { Icon, List, ListItem, ListItemLink, LogoContainer, LogoImg, SideBarContainer } from "./index.styles"

const SideBar = () => {
const sidebarList = [
    {
        icon: Icons.DashboardIcon,
        title: "Dashboard",
        url: "/"
    },
    {
        icon: Icons.OrderIcon,
        title: "Buy Order",
        url: "/buyorder"
    },
    {
        icon: Icons.OrderIcon,
        title: "Sell Order",
        url: "/sellorder"
    },
    {
        icon: Icons.StoreIcon,
        title: "Store",
        url: "/store"
    },
    {
        icon: Icons.AdminIcon,
        title: "Admin",
        url: "/profile"
    },
    {
        icon: Icons.SettingIcon,
        title: "Setting",
        url: "/setting",
    },   
]

    return <SideBarContainer>
        <LogoContainer>
            <LogoImg src={Images.SmallLogo} alt="logo" />
            ADUDU
        </LogoContainer>
        <List>
        {sidebarList.map((listItem, index) => (
            <ListItemLink key={`sidebar list ${index}`} to={listItem.url}>
             <ListItem >
                 <Icon src={listItem.icon} alt="icon" />
                 {listItem.title}
            </ListItem>
            </ListItemLink>
        ))}
        </List>
    </SideBarContainer>
};

export default SideBar;