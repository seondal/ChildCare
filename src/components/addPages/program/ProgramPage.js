import React, { useState, useContext, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import MenuBar from '../../MenuBar'
import '../../../App.css'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import BackgroundImage from './Main4.jpg'
import DetailPage from './ContentsPage'
import { withRouter } from 'react-router'

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
`

const ImageWrapper = styled.image`
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #e7e6e1;
  background-position: center;
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 23%;
  margin-right: 1%;
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
  margin-right: 30px;
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

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
  padding-top: 30px;
`

function ProgramPage({ match }) {
  const [lang, setLang] = useState(match.params.lang)
  useEffect(() => setLang(match.params.lang), [match.params.lang])
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const classes = useStyles()
  const [numState, setNumState] = useState(1)

  return (
    <div>
      <Wrapper>
        <MenuBar change={lang} />
        <RowWrapper>
          <ImageWrapper src={BackgroundImage}>
            <ColumnWrapper>
              <TextColumnWrapper>
                <TextWrapper size="19">
                  {lang == 'kor' ? ' 프로그램 소개 ' : 'Program :'}
                  <br /> <br />
                  {lang == 'kor'
                    ? ' ISayLab의 프로그램을 소개합니다.'
                    : 'Look around the program.'}{' '}
                </TextWrapper>
              </TextColumnWrapper>
              <Button
                block
                onClick={() => {
                  setNumState(1)
                }}
                style={{
                  color: 'black',
                  height: '45px',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '13px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor'
                  ? '언어발달 평가 및 언어지원'
                  : 'Language development evaluation'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(2)
                }}
                block
                style={{
                  color: 'black',
                  height: '45px',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '13px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor'
                  ? '언어발달 전문가와 함께 하는 책읽기'
                  : 'Book reading with experts'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(3)
                }}
                block
                style={{
                  color: 'black',
                  height: '45px',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '13px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor'
                  ? '자녀의 언어발달을 촉진하기 위한 부모 코칭'
                  : 'Parent coaching '}
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
                  fontFamily: 'payboocExtraBold',
                  fontSize: '13px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor'
                  ? '언어발달 관련 영역 전문가 교육'
                  : 'Language area expert training'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(5)
                }}
                block
                style={{
                  color: 'black',
                  height: '45px',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '13px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor'
                  ? '주말프로그램: 책과 함께하는 휴식 시간'
                  : 'Weekend: Break Time with Books'}
              </Button>
              <Button
                onClick={() => {
                  setNumState(6)
                }}
                block
                style={{
                  color: 'black',
                  height: '45px',
                  borderRadius: '10px',
                  fontFamily: 'payboocExtraBold',
                  fontSize: '13px',
                  backgroundColor: 'rgba(249, 189, 0, 0.8)',
                  borderColor: 'rgba(241, 245, 249, 1)',
                  marginBottom: '1px',
                }}
              >
                {lang == 'kor'
                  ? ' 특별프로그램: 여름/겨울방학 책읽기 캠프'
                  : 'Special: Vacation Reading Camp'}
              </Button>
            </ColumnWrapper>
          </ImageWrapper>
        </RowWrapper>
        <ContentsWrapper>
          <DetailPage num={numState} lang={lang} />
        </ContentsWrapper>
      </Wrapper>
    </div>
  )
}

export default withRouter(ProgramPage)
