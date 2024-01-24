import Footer from "../Footer";
import SideBar from "../SideBar";
import { Content, LayoutContainer } from "./index.styles";

const PostLayout = ({children}) => {
 return (
   <LayoutContainer>
    <SideBar />
    <Content >
       {children}
       <Footer />
    </Content>
   </LayoutContainer>
 )
}

export default PostLayout;