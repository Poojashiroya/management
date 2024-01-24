import { useState } from "react";
import Icons from "../../Icons/index";
import { Edit, ForgotPasswordContainer, Input, Item, Name, ProfileContainer, PropertyVal, Submit, Title, UserDetailsContainer } from "./index.styles";

const Admin = () => {
    const [editEnable, setEditEnable] = useState([]);

    const handleEditEnable = (property) => {
        setEditEnable([...editEnable, property]);
    }

    return <ProfileContainer>
        <Title>User Profile</Title>
        <UserDetailsContainer>
            <Item>
                <Name>First Name:</Name>
                <PropertyVal>Pooja</PropertyVal>
                {editEnable.includes("firstName") && <Input type="text" placeholder="First Name"/>}
                <Edit onClick={() => handleEditEnable("firstName")}>
                    <img src={Icons.EditIcon} alt="edit" width="22px" height="22px"/>
                </Edit>
            </Item>
            <Item>
                <Name>Last Name:</Name>
                <PropertyVal>Shiroya</PropertyVal>
                {editEnable.includes("lastName") && <Input type="text" placeholder="Last Name"/>}
                <Edit onClick={() => handleEditEnable("lastName")}>
                    <img src={Icons.EditIcon} alt="edit" width="22px" height="22px"/>
                </Edit>
            </Item>
            <Item>
                <Name>Email:</Name>
                <PropertyVal>poojashiroya99@gmail.com</PropertyVal>
                {editEnable.includes("email") && <Input type="text" placeholder="Email"/>}
                <Edit onClick={() => handleEditEnable("email")}>
                    <img src={Icons.EditIcon} alt="edit" width="22px" height="22px"/>
                </Edit>
            </Item>
            <Item>
                <Name>Phone Number:</Name>
                <PropertyVal>7202019848</PropertyVal>
                {editEnable.includes("phoneNumber") && <Input type="text" placeholder="Phone Number"/>}
                <Edit onClick={() => handleEditEnable("phoneNumber")}>
                    <img src={Icons.EditIcon} alt="edit" width="22px" height="22px"/>
                </Edit>
            </Item>
            <Submit disabled={editEnable.length === 0} >Update</Submit>
            <ForgotPasswordContainer>
                <Title>Reset Password</Title>
                <Item>
                    <Name>Old Password:</Name>
                    <Input type="password" placeholder="Old Password" />
                </Item>
                <Item>
                    <Name>New Password:</Name>
                    <Input type="password" placeholder="New Password" />
                </Item>
                <Item>
                    <Name>Confirm New Password:</Name>
                    <Input type="password" placeholder="Confirm New Password" />
                </Item>
                <Submit>Submit</Submit>

            </ForgotPasswordContainer>
        </UserDetailsContainer>
    </ProfileContainer>
}

export default Admin;