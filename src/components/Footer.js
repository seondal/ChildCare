import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  modal: {},
  footer: {
    height: '20vh',
    backgroundColor: '#F9BE00',
    fontFamily: 'payboocBold',
  },
}))

const Footer = () => {
  const classes = useStyles()

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

  return (
    <div className={classes.footer}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: '3vh',
          marginBottom: '3vh',
        }}
      >
        <img src="/002.png" width="60px" height="60px" />
      </div>
      <div
        style={
          isMobile
            ? {
                backgroundColor: '#F9BE00',
                display: 'flex',
                fontWeight: 'bold',
                fontSize: '10px',
                alignItems: 'center',
                flexDirection: 'column',
                paddingBottom: '20px',
              }
            : {
                backgroundColor: '#F9BE00',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
                fontWeight: 'bold',
                fontSize: '16px',
                marginTop: '1.2vh',
                justifyContent: 'center',
              }
        }
      >
        <div>대표이메일 : isaylab2020@gmail.com</div>
        {isMobile ? <></> : <div style={{ margin: '0px 1vw' }}>|</div>}
        <div>
          주소: 서울특별시 강남구 압구정로 29길 68, 금강아케이드상가 2층
        </div>
      </div>
    </div>
  )
}

export default Footer
