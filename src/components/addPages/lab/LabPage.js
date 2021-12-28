import React, { useState, useContext, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuBar from '../../MenuBar'
import '../../../App.css'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import BackgroundImage from './Main1.jpeg'
import DetailPage from './DetailPage'
import { withRouter } from 'react-router'
import { useHistory, useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  modal: {},
  footer: {
    height: '20vh',
    backgroundColor: '#F9BE00',
    fontFamily: 'payboocBold',
  },
}))

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150vh;
  width: 100%;

  @media (max-width: 430px) {
    overflow-x: hidden;
  }
`

const ImageWrapper = styled.image`
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 430px) {
    display: none;
  }
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`
const TextColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  background-color: rgba(0, 0, 0, 0);
  height: 50px;
  font-family: 'payboocExtraBold';
`

const TextWrapper = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 12}px;
  font-weight: ${props => props.weight || 'bold'};
  margin-top: 10px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media (max-width: 1024px) {
    font-size: ${props => props.size - 5 || 12}px;
  }
`

function LabPage({ match }) {
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

  const [lang, setLang] = useState(match.params.lang)
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const classes = useStyles()
  const [numState, setNumState] = useState(1)
  useEffect(() => setLang(match.params.lang), [match.params.lang])

  const location = useLocation(1)
  console.log(location.state)

  return (
    <div>
      <Wrapper>
        <MenuBar change={lang} />
        <RowWrapper>
          <ImageWrapper src={BackgroundImage}>
            <ColumnWrapper>
              <TextColumnWrapper style={{ fontFamily: 'payboocExtraBold' }}>
                <TextWrapper size="19">
                  {lang == 'kor' ? '연구소 소개 ' : 'About Lab  '} <br />
                  <br />
                  {lang == 'kor' ? ' ISayLab을 ' : 'Welcome To '}
                  {lang == 'kor' ? '소개합니다.' : 'ISayLab'}
                </TextWrapper>
              </TextColumnWrapper>
              <Button
                block
                onClick={() => {
                  setNumState(1)
                }}
                style={{
                  color: 'black',
                  height: '50px',
                  width: '80%',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '15px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor' ? '연구소 소개' : 'Lab'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(2)
                }}
                block
                style={{
                  color: 'black',
                  height: '50px',
                  width: '80%',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '15px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor' ? '연구원 소개' : 'Researchers'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(3)
                }}
                block
                style={{
                  color: 'black',
                  height: '50px',
                  width: '80%',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '15px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor' ? '연구소 전경' : 'Photo'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(4)
                }}
                block
                style={{
                  color: 'black',
                  height: '50px',
                  borderRadius: '10px',
                  width: '80%',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '15px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor' ? '이용안내' : 'Service'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(5)
                }}
                block
                style={{
                  color: 'black',
                  height: '50px',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '15px',
                  width: '80%',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor' ? '오시는 길' : 'Directions'}
              </Button>
            </ColumnWrapper>
          </ImageWrapper>
        </RowWrapper>
        <DetailPage
          num={isMobile ? location.state.detail : numState}
          lang={lang}
        />
        <ImageWrapper src={BackgroundImage} />
      </Wrapper>
    </div>
  )
}

export default withRouter(LabPage)
