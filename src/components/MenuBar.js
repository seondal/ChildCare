import React, { useContext, useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'

import { useHistory } from 'react-router-dom'

function MenuBar({ change }) {
  const pathname = window.location.pathname
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const [prof, setProf] = useState(false)
  const [message, setMessage] = useState('')
  console.log(window.location.pathname.split('/'))
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

  const menuBar =
    change == 'kor' ? (
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
            name="홈"
            onClick={() => history.push(`/main/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="연구소소개"
            onClick={() => history.push(`/lab/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="프로그램소개"
            onClick={() => history.push(`/program/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="연구소 소식"
            onClick={() => history.push(`/board/kor`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            onClick={onLanguage2}
            name="Eng"
          />
        </Menu.Menu>
      </Menu>
    ) : (
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
          href="/main/eng"
        >
          {' '}
          <img src="/002.png" width="50px" height="50px" />
        </a>

        <Menu.Menu position="right" style={{ marginRight: '30px' }}>
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="Home"
            onClick={() => history.push(`/main/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="Lab"
            onClick={() => history.push(`/lab/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="Program"
            onClick={() => history.push(`/program/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="News"
            onClick={() => history.push(`/board/eng`)}
          />
          <Menu.Item
            style={{
              color: 'white',
              fontWeight: '600',
              fontFamily: 'payboocExtraBold',
            }}
            name="한국어"
            onClick={onLanguage}
          />
        </Menu.Menu>
      </Menu>
    )

  return <div style={{ height: '70px', margin: '0px' }}>{menuBar}</div>
}

export default MenuBar
