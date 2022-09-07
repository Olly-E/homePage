import React, { useState } from 'react';
import {AiFillHome} from 'react-icons/ai';
import {HiUserGroup} from 'react-icons/hi';
import {BsBriefcaseFill} from 'react-icons/bs';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import {GiNotebook} from 'react-icons/gi'
import {FaQuestion} from 'react-icons/fa';
import {MdSchool} from 'react-icons/md'
import styled from 'styled-components';
import navbarprologo from '../home_img/navbarprologo.png';




const Sidebaroverall = styled.div `
    position: fixed;
    /* width: 15vw; */
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    display: none;
    @media (max-width: 1000px){
        display: block;
    }
`;


const Button = styled.button`
    background-color: black;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0.5rem 0 0 0.5rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before,
    &::after {
        content:"";
        background-color: white;
        height: 2px;
        width: 1rem;
        position: absolute;
        transition: all 0.3s ease;
    }
    &::before {
        top: ${props => props.clicked ? "1.5": "1rem"};
        transform: ${props => props.clicked ? "rotate(135deg)": "rotate(0)"};
    }
    &::after {
        top:${props => props.clicked ? "1.2": "1.5rem"};
        transform: ${props => props.clicked ? "rotate(-135deg)": "rotate(0)"}
    }
`;
const SidebarContainer = styled.div`
    background: black;
    width: 3.5rem;
    height: 80vh;
    margin-top:  1rem;
    border-radius: 0 30px 30px 0;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const Logo = styled.div`
    width: 2rem;
    img {
        width: 100%;
        height: auto;
    }
`;
const Slickbar = styled.ul`
    color:#FFF4F0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem 0; 
    background-color: black;
    position: absolute;
    top: 5rem;
    left: 0;
    width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
    transition: all 0.5s ease;
    border-radius: 0 30px 30px 0;
`;
const Item = styled.li`
    width: 100%;
    padding: 1rem 0;
    cursor: pointer;
    padding-left: 1rem;
    display: flex;
    /* margin-left: 1rem; */
    align-items: center;
    box-sizing: border-box;

    &:hover{
        color: #F24405;
        border-right: 4px solid white;
    }
    /* Text {
        width: 1rem;
        height: auto;
    } */
`; 

const Text = styled.span`
    width: ${props => props.clicked ? '100%' : '0'};
    overflow: hidden;
    margin-left: ${(props) => (props.clicked ? '1.5rem' : '0')};
    transition: all 0.3s ease;
`;

const Profile = styled.div`
    width: ${props => props.clicked ? '14rem' : '3rem'};
    height: 3rem;

    padding: 0.5rem 0.05rem;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${props => props.clicked ? '9rem' : '0'};

    background-color: black;
    color: white;
    transition: all 0.3s ease;

    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

        &:hover {
            border: 2px solid gray;
            padding: 2px;
        }
    }
`;
const Details = styled.li`
    display: ${(props) => (props.clicked ? 'flex' : 'none')};
    justify-content: space-between;
    align-items: center;
`;

const Name = styled.div`
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4 {
        display: inline-block;
    }
    a {
        font-size: 0.8rem;
        text-decoration: none;
        color: grey;

        &:hover{
            text-decoration: underline;
        }
    }
`;
const Logout = styled.button`
    border: none;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
`;



const SidebarPro = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setProfileClick] = useState(false);
    const handleProfileClick = () => setProfileClick(!profileClick);
    // const [viewSideBar, setViewSideBar] = useState(false);
    
  return (
    <Sidebaroverall className='sidebarpro-div'>
        <Button className='ham-btn' clicked={click} onClick={() => handleClick()}>Click</Button>
        <SidebarContainer>
            <Logo>
                <img src={navbarprologo} alt="logo" />
            </Logo>
            <Slickbar clicked={click}>
                <Item>
                 <HiUserGroup style={{fontSize: '1.6rem'}}/>
                 <Text clicked={click}>About Us</Text > 
                </Item>
                <Item>
                <MdSchool style={{fontSize: '1.6rem'}}/>
                 <Text clicked={click}>Learn</Text > 
                </Item>
                <Item>
                <BsBriefcaseFill  style={{fontSize: '1.6rem'}}/>
                 <Text clicked={click}>Career</Text > 
                </Item>
                <Item>
                <RiMoneyDollarCircleLine style={{fontSize: '1.6rem'}}/>
                 <Text clicked={click}>Invest</Text > 
                </Item>
                <Item>
                <GiNotebook style={{fontSize: '1.6rem'}}/>
                 <Text clicked={click}>Blog</Text > 
                </Item>
                <Item>
                <AiFillHome style={{fontSize: '1.6rem'}}/>
                 <Text clicked={click}>Home</Text > 
                </Item>
                <Item>
                <FaQuestion style={{fontSize: '1.6rem'}}/>
                 <Text clicked={click}>FAQ</Text > 
                </Item>
            </Slickbar>


            <Profile clicked={profileClick}>
               <img onClick={() => handleProfileClick()} src="https://picsum.photos/id/1/200/300" alt="Profile image" />
               <Details clicked={profileClick}>
                   <Name>
                       <h4>Mr Who</h4>
                       <a href="#">view profile</a>
                   </Name>
                   <Logout>
                   <AiFillHome style={{fontSize: '1.6rem', color: 'white'}}/>
                   </Logout>
               </Details>
            </Profile>


        </SidebarContainer>
    </Sidebaroverall>
  )
}



export default SidebarPro