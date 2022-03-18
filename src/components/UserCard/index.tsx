import { IconContext } from 'react-icons';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import User from "../../pages/Home/types";
import { UserCardContainer, UserInfoPrimary, UserInfoSecondary, UserName } from "./styles";

interface Props {
    user: User
}

const UserCard = (props: Props) => {
    const { user } = props;
    const navigate = useNavigate();
    return (
        <UserCardContainer onClick={() => navigate(`/todos/${user.id}`)} >                        
                <UserInfoPrimary>
                    <IconContext.Provider value={{ className: "user-icon"}}>
                        < AiOutlineUser  />
                    </IconContext.Provider>
                    <UserName>
                        {user.name}
                    </UserName>
                </UserInfoPrimary>
                <UserInfoSecondary>
                    <p className='info-text'>Email: <br /> </p>{user.email}
                    <p className='info-text'>Phone: <br /> </p>{user.phone}
                    <p className='info-text'>Website: <br /></p>{user.website}
                </UserInfoSecondary>            
        </UserCardContainer>
    );
}

export default UserCard;