import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router-dom'
import { MenuItem } from 'material-ui'

function MenuBar({ change }) {
  const pathname = window.location.pathname
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const [prof, setProf] = useState(false)
  const [message, setMessage] = useState('')
  // console.log(window.location.pathname.split('/'))
  let now = window.location.pathname.split('/')[1]
  const [langState, setLangState] = useState(now)
  const path = pathname === '/' ? 'home' : pathname.substr(1)
  const [isOpen, setIsOpen] = useState(false)

  const onLanguage = () => {
    setTimeout(() => {
      setLangState('kor')
      history.push(`/${now}/kor`)
    }, 100)
  }
  const onLanguage2 = () => {
    setTimeout(() => {
      setLangState('eng')
      history.push(`/${now}/eng`)
    }, 100)
  }

  //모바일 여부 감지
  const [isMobile, setIsMobile] = useState(false)
  const resizingHandler = () => {
    if (window.innerWidth <= 430) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  useEffect(() => {
    if (window.innerWidth <= 430) {
      setIsMobile(true)
    }

    window.addEventListener('resize', resizingHandler)
    return () => {
      window.removeEventListener('resize', resizingHandler)
    }
  }, [])

  const menuBar = (
    <Menu
      secondary
      pointing
      size="massive"
      fixed="top"
      style={{
        height: '7vh',
        backgroundColor: '#F9BE00',
        padding: '5px',
        margin: '0px',
        borderBottom: 'none',
        fontSize: '1.8vh',
        alignItems: 'center',
      }}
    >
      <a
        style={{
          marginRight: '30px',
          marginLeft: '50px',
          color: '#FFFFFF',
          fontSize: '25px',
          fontWeight: '600',
        }}
      >
        {' '}
        <img
          src="/002.png"
          width="50px"
          height="50px"
          onClick={() => history.push(`/main/kor`)}
        />
      </a>
      <Menu.Menu position="right" style={{ marginRight: '30px' }}>
        <Menu.Item
          style={{
            color: 'white',
            fontWeight: '600',
            fontFamily: 'payboocExtraBold',
          }}
          name={change == 'kor' ? '홈' : 'Home'}
          onClick={() => history.push(`/main/${change}`)}
        />
        <Menu.Item
          style={{
            color: 'white',
            fontWeight: '600',
            fontFamily: 'payboocExtraBold',
          }}
          name={change == 'kor' ? '연구소 소개' : 'Lab'}
          onClick={() => history.push(`/lab/${change}`)}
        />
        <Menu.Item
          style={{
            color: 'white',
            fontWeight: '600',
            fontFamily: 'payboocExtraBold',
          }}
          name={change == 'kor' ? '프로그램 소개' : 'Program'}
          onClick={() => history.push(`/program/${change}`)}
        />
        <Menu.Item
          style={{
            color: 'white',
            fontWeight: '600',
            fontFamily: 'payboocExtraBold',
          }}
          name={change == 'kor' ? '연구소 소식' : 'News'}
          onClick={() => history.push(`/board/${change}`)}
        />

        <Menu.Item
          style={{
            color: 'white',
            fontWeight: '600',
            fontFamily: 'payboocExtraBold',
          }}
          onClick={change == 'kor' ? onLanguage2 : onLanguage}
          name={change == 'kor' ? 'Eng' : '한국어'}
        />
      </Menu.Menu>
    </Menu>
  )

  // MARK: Mobile
  const Slide = styled.div`
    .show-slide {
      position: fixed;
      width: 65%;
      height: 100%;
      z-index: 1;
      top: 7vh;
      background-color: #f9be00;
      left: 0px;
      padding: 20px;
      animation: showSlide 0.2s;
    }

    .hide-slide {
      display: none;
    }

    @keyframes showSlide {
      from {
        left: -65%;
      }
      to {
        left: 0px;
      }
    }

    .lab-menu {
      margin-left: 15px;
    }
  `
  const SlideItem = styled.div`
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: payboocExtraBold;
    margin: 20px;
  `
  const menuBarMobile = (
    <>
      <Menu
        fixed="top"
        style={{
          height: '7vh',
          backgroundColor: '#F9BE00',
          padding: '5px',
          borderBottom: 'none',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <GiHamburgerMenu
            color="white"
            size="25px"
            onClick={() => setIsOpen(isOpen => !isOpen)}
          />
        </div>
        <div style={{ marginRight: '13vh', marginLeft: '13vh' }}>
          <img
            src="/002.png"
            width="50px"
            height="50px"
            onClick={() => history.push(`/main/kor`)}
          />
        </div>
        <div
          style={{
            width: '40px',
            color: 'white',
            fontWeight: '600',
            fontFamily: 'payboocExtraBold',
          }}
          onClick={change == 'kor' ? onLanguage2 : onLanguage}
        >
          {change == 'kor' ? 'Eng' : '한국어'}
        </div>
      </Menu>
      <Slide>
        <div className={isOpen ? 'show-slide' : 'hide-slide'}>
          <SlideItem onClick={() => history.push(`/main/${change}`)}>
            {change == 'kor' ? '> 홈' : '> Home'}
          </SlideItem>
          <SlideItem
            onClick={() =>
              history.push({ pathname: `/lab/${change}`, state: { detail: 1 } })
            }
          >
            {change == 'kor' ? '> 연구소 소개' : '> Lab'}
          </SlideItem>

          <div className="lab-menu">
            <SlideItem
              onClick={() =>
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 2 },
                })
              }
            >
              {change == 'kor' ? '연구원 소개' : 'Researchers'}
            </SlideItem>
            <SlideItem
              onClick={() =>
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 3 },
                })
              }
            >
              {change == 'kor' ? '연구소 전경' : 'Photo'}
            </SlideItem>
            <SlideItem
              onClick={() =>
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 4 },
                })
              }
            >
              {change == 'kor' ? '이용안내' : 'Service'}
            </SlideItem>
            <SlideItem
              onClick={() =>
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 5 },
                })
              }
            >
              {' '}
              {change == 'kor' ? '오시는 길' : 'Directions'}
            </SlideItem>
          </div>

          <SlideItem onClick={() => history.push(`/program/${change}`)}>
            {change == 'kor' ? '> 프로그램 소개' : '> Program'}
          </SlideItem>
          <SlideItem onClick={() => history.push(`/board/${change}`)}>
            {change == 'kor' ? '> 연구소 소식' : '> News'}
          </SlideItem>
        </div>
      </Slide>
    </>
  )

  return (
    <div style={{ height: '70px', margin: '0px' }}>
      {isMobile ? menuBarMobile : menuBar}
    </div>
  )
}

export default MenuBar
