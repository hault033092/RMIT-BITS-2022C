import React from 'react'
import styled from 'styled-components'
import { ImBook } from 'react-icons/im'
import {IoIosSchool} from 'react-icons/io'
import { FaUser } from 'react-icons/fa'
import { IoPodium } from 'react-icons/io5'
import AvatarImg from '../../assets/AvatarImg.jpg'
// import Controller from '../assets/controller.png'
import Link from './Link'

//This is the Sidebar for the User Detail page
const SideBar = () => {
  const defaultStyle = { fill: 'url(#gradient)' }
  return (
    <SidebarContainer>
      <ProfileContainer>
        <Avatar src={AvatarImg} />
        <Name>Nguyen Vu</Name>
        <Title>English Learner</Title>
      </ProfileContainer>
      <LinksContainer>
        <Link title='English Learner'>
          <IoIosSchool style={defaultStyle} />
        </Link>
        <Link title='GPA'>
          <IoPodium style={defaultStyle} />
        </Link>
        <Link title='Biography'>
          <FaUser style={defaultStyle} />
        </Link>
        <Link title='Library'>
          <ImBook style={defaultStyle} />
        </Link>
      </LinksContainer>
      <ProBox>
        <ProText>Buy more packages.</ProText>
        {/* <Image src={Controller} /> */}
      </ProBox>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  width: 30%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(14px);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  /* border-right: 1px solid #e7e7e7; */
`

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25%;
  padding: 3rem 0 1rem 0;
`

const Avatar = styled.img`
  height: 7rem;
  border-radius: 5rem;
`

const Name = styled.h1`
  color: #a53b11;
  font-size: 1.3rem;
  margin: 1rem 0 0.2rem 0;
`

const Title = styled.h2`
  color: #a53b11;
  font-size: 1rem;
`

const LinksContainer = styled.div`
  padding-left: 5rem;
  margin: 2rem 0;
`

const ProBox = styled.div`
  background: #ee0979; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff6a00,
    #ee0979
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 15%;
  border-radius: 1rem;
  padding: 1rem;
  margin: auto auto;
`

const ProText = styled.span`
  color: #e7e7e7;
  font-weight: bolder;
`

const Image = styled.img`
  height: 4rem;
  transform: rotate(-60deg);
`

export default SideBar
