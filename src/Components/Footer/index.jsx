import Icons from "../../Icons";
import Images from "../../Images";
import {
  FooterBottom,
  FooterContainer,
  FooterDescription,
  FooterDetails,
  FooterLogo,
  FooterLogoLink,
  FooterTop,
  List,
  ListItem,
  ListTitle,
  Lists,
} from "./index.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterDetails>
          <FooterLogoLink>
            <FooterLogo src={Images.FooterLogo} alt="footer-logo" />
          </FooterLogoLink>
          <FooterDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </FooterDescription>
        </FooterDetails>
        <Lists>
            <List>
                <ListTitle>Services</ListTitle>
                <ListItem>Email Marketing</ListItem>
                <ListItem>Campaigns</ListItem>
                <ListItem>Branding</ListItem>
                <ListItem>Offline</ListItem>
            </List>
            <List>
                <ListTitle>About</ListTitle>
                <ListItem>Our Story</ListItem>
                <ListItem>Benefits</ListItem>
                <ListItem>Team</ListItem>
                <ListItem>Careers</ListItem>
            </List>
            <List>
                <ListTitle>Follow Us</ListTitle>
                <ListItem>
                    <img src={Icons.FacebookIcon} alt="face-book" width="24px" height="24px" /> 
                    Facebook
                </ListItem>
                <ListItem>
                    <img src={Icons.InstagramIcon} alt="instagram" width="24px" height="24px"/> 
                    Instagram
                </ListItem>
                <ListItem>
                    <img src={Icons.TwitterIcon} alt="Twitter" width="24px" height="24px" /> 
                    Twitter
                </ListItem>
            </List>
        </Lists>
      </FooterTop>
      <FooterBottom></FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
