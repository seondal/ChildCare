import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router-dom'
import { MenuItem } from 'material-ui'

function MenuBar({ change, openProgram, setOpenProgram }) {
  const pathname = window.location.pathname
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const [prof, setProf] = useState(false)
  const [message, setMessage] = useState('')
  // console.log(window.location.pathname.split('/'))
  let now = window.location.pathname.split('/')[1]
  const [langState, setLangState] = useState(now)
  const path = pathname === '/' ? 'home' : pathname.substr(1)

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
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenLab, setIsOpenLab] = useState(false)
  const [isOpenProgram, setIsOpenProgram] = useState(false)

  useEffect(() => {
    if (openProgram) {
      setIsOpen(() => true)
      setIsOpenProgram(() => true)
      setIsOpenLab(() => false)
    }
  })

  const Slide = styled.div`
    .show-slide {
      position: fixed;
      width: 100%;
      z-index: 1;
      top: 7vh;
      background-color: #f9be00;
      left: 0px;
      padding: 0px;
      /* animation: showSlide 0.2s; */
    }
    .hide-slide {
      display: none;
    }

    .show-program {
      background-color: white;
      padding: 10px;
    }
    .hide-program {
      display: none;
    }

    @keyframes showSlide {
      from {
        top: -65%;
      }
      to {
        down: 0px;
      }
    }
  `
  const SlideItem = styled.li`
    border-bottom: 1px solid #dddddd;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: payboocExtraBold;
    padding: 20px;
    text-align: center;
    list-style: none;
  `
  const DetailSlideItem = styled.li`
    color: #f9be00;
    font-size: 1rem;
    font-weight: 600;
    font-family: payboocExtraBold;
    margin: 20px;
    list-style: none;
    text-align: center;
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
            onClick={() => {
              setIsOpen(isOpen => !isOpen)
              if (openProgram) {
                setOpenProgram(false)
              }
            }}
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
        <ul className={isOpen ? 'show-slide' : 'hide-slide'}>
          <SlideItem onClick={() => history.push(`/main/${change}`)}>
            {change == 'kor' ? '홈' : 'Home'}
          </SlideItem>
          <SlideItem
            onClick={() => {
              setIsOpenProgram(false)
              setIsOpenLab(isOpenLab => !isOpenLab)
              if (openProgram) {
                setOpenProgram(false)
              }
            }}
          >
            {change == 'kor' ? '소개' : 'About'}
          </SlideItem>

          <ul className={isOpenLab ? 'show-program' : 'hide-program'}>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 1 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor' ? '연구소 소개' : 'Lab'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 0 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor' ? '협력업체' : 'Partner Company'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 2 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor' ? '연구원 소개' : 'Researchers'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 3 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor' ? '연구소 전경' : 'Photo'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 4 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor' ? '이용안내' : 'Service'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/lab/${change}`,
                  state: { detail: 5 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor' ? '오시는 길' : 'Directions'}
            </DetailSlideItem>
          </ul>

          <SlideItem
            onClick={() => {
              setIsOpenProgram(isOpenProgram => !isOpenProgram)
              setIsOpenLab(false)
            }}
          >
            {change == 'kor' ? '프로그램 소개' : 'Program'}
          </SlideItem>
          <ul className={isOpenProgram ? 'show-program' : 'hide-program'}>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/program/${change}`,
                  state: { detail: 1 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor'
                ? '언어발달 평가 및 언어지원'
                : 'Language development evaluation'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/program/${change}`,
                  state: { detail: 2 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor'
                ? '언어발달 전문가와 함께하는 책읽기'
                : 'Book reading with experts'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/program/${change}`,
                  state: { detail: 3 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor'
                ? '자녀의 언어발달을 촉진하기 위한 부모 코칭'
                : 'Parent coaching'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/program/${change}`,
                  state: { detail: 4 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor'
                ? '언어발달 관련 영역 전문가 교육'
                : 'Language area expert training'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/program/${change}`,
                  state: { detail: 5 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor'
                ? '주말프로그램 : 책과 함께하는 휴식 시간'
                : 'Weekend: Break Time with Books'}
            </DetailSlideItem>
            <DetailSlideItem
              onClick={() => {
                history.push({
                  pathname: `/program/${change}`,
                  state: { detail: 6 },
                })
                setIsOpen(false)
              }}
            >
              {change == 'kor'
                ? '특별프로그램: 여름/겨울방학 책읽기 캠프'
                : 'Special: Vacation Reading Camp'}
            </DetailSlideItem>
          </ul>
          <SlideItem onClick={() => history.push(`/board/${change}`)}>
            {change == 'kor' ? '연구소 소식' : 'News'}
          </SlideItem>
        </ul>
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
