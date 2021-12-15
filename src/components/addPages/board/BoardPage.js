import React, { useState, useContext, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuBar from '../../MenuBar'
import '../../../App.css'
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Button, Table, Modal, Typography } from 'antd'
import Fade from 'react-reveal/Fade'
import BackgroundImage from './Main1.jpg'

const ImageWrapper = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 310px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #f7f7f7;
`

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
  min-height: 200vh;
  width: 100%;
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
  width: 30%;
  height: 100%;
`
const TextColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0);
  height: 50px;
  width: 50%;
  padding: 40px;
`

const TextWrapper = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 12}px;
  font-weight: ${props => props.weight || 'bold'};
  margin-top: 10px;
  margin-right: 30px;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

function BoardPage({ match }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  const [lang, setLang] = useState(match.params.lang)
  const classes = useStyles()
  const [numState, setNumState] = useState(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  useEffect(() => setLang(match.params.lang), [match.params.lang])
  const { Title, Paragraph, Text, Link } = Typography
  const [newsState, setNewsState] = useState({
    status: 'idle',
    member: newsData[0],
  })
  const onChange = ({ num }) => {
    setNewsState({
      member: newsData[num],
    })
  }
  const showModal = num => {
    setTimeout(() => {
      setNewsState({
        member: newsData[num],
      })
      setIsModalVisible(true)
    }, 300)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const newsColumns = [
    //뉴스테이블
    {
      title: '번호',
      dataIndex: 'source',
      width: 80,
    },
    {
      title: '작성일',
      dataIndex: 'date',
      width: 150,
    },
    {
      title: '작성자',
      dataIndex: 'theme',
      width: 150,
    },

    {
      title: '제목',
      dataIndex: 'title',
      render: (text, record, index) => (
        <a onClick={() => showModal(index)}> {text} </a>
      ),
    },
  ]

  return (
    <div>
      <Wrapper>
        <MenuBar change={lang} />
        <RowWrapper>
          <ImageWrapper src={BackgroundImage}>
            <TextColumnWrapper>
              <TextWrapper size="25">
                {' '}
                {lang == 'kor' ? ' 연구소 게시판' : 'Board'}
                <br />
                <br />{' '}
              </TextWrapper>
              <TextWrapper size="18">
                {' '}
                {lang == 'kor'
                  ? ' ISayLab 새로운 소식을 확인해보세요.'
                  : 'Check out ISayLAb`s news.'}{' '}
              </TextWrapper>
            </TextColumnWrapper>
          </ImageWrapper>
        </RowWrapper>

        <ContentsWrapper>
          <Fade cascade>
            <Table
              columns={newsColumns}
              size="large"
              rowKey={'id'}
              dataSource={newsData}
            />
          </Fade>
          <Modal
            title=" "
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
          >
            <Title
              level={4}
              style={{
                fontFamily: 'payboocExtraBold',
                marginTop: '2%',
                marginBottom: '2%',
              }}
            >
              {newsState.member.title}
            </Title>
            <Paragraph
              style={{
                fontFamily: 'payboocMedium',
              }}
            >
              {newsState.member.contents}
            </Paragraph>
            <Paragraph
              style={{
                fontFamily: 'payboocMedium',
              }}
            >
              {newsState.member.contentsEng}
            </Paragraph>
            <Paragraph
              style={{
                fontFamily: 'payboocBold',
              }}
            >
              {newsState.member.theme}
            </Paragraph>
            <Paragraph
              style={{
                fontFamily: 'payboocBold',
              }}
            >
              {newsState.member.date}
            </Paragraph>
          </Modal>
        </ContentsWrapper>
      </Wrapper>
    </div>
  )
}

export default BoardPage

let newsData = [
  {
    date: '2021-12-01',
    source: 1,
    theme: '아이세이 연구소',
    title: '공지사항 (Notice) ',
    contents:
      '교육 및 프로그램 참여 비용은 전화(070-***-****) 또는 이메일(isaylab2020@gmail.com)로 문의주시기 바랍니다.결제는 신용카드, 계좌이체, 현금 결제 모두 가능하며, 계좌이체 또는 현금 결제 시 현금영수증을 발급해드립니다. * 본 기관은 바우처 제공 기관이 아닙니다.',
    contentsEng:
      'If you would like to inquire about the cost of the program, please call (070-*****) or email (isaylab2020@gmail.com). Payment can be made by credit card, account transfer, or cash payment, and a cash receipt will be issued for account transfer or cash payment. * This institution is not a voucher provider.',
  },
  {
    date: '2021-12-01',
    source: 2,
    theme: '아이세이 연구소',
    title:
      'I Say Lab이 압구정동에서 새롭게 시작합니다. (I Say Lab starts anew in Apgujeong-dong)',
    contents:
      '2020년 11월 이화여자대학교 기술지주회사 자회사로서 이화여자대학교에서 작은 연구소로 시작한 I Say Lab이 강남구 압구정동으로 확장 이전하여 새롭게 시작합니다. 찾아오시는 모든 분들이 늘 설레고 즐거운 마음으로 오실 수 있는 I Say Lab이 되기를 기대하는 마음으로, 아이들과 부모님들이 모두 편안하고 친밀하게 느낄 수 있는 공간으로 새단장했습니다. I Say Lab의 문을 열고 들어오시면 최고의 언어발달 전문가들이 진심을 다해 맞이해드릴 것입니다.',
    contentsEng:
      'I Say Lab, which started as a small research institute at Ewha Womans University as a subsidiary of Ewha Womans University`s technology holding company in November 2020, will expand and move to Apgujeong-dong, Gangnam-gu. With anticipation of making I Say Lab a place where everyone can visit with excitement and joy, we have refurbished it into a space where both children and parents can enjoy and feel comfortable. When you enter the I Say Lab, the best language development experts will greet you with all their hearts.',
  },
  {
    date: '2021-12-01',
    source: 2,
    theme: '아이세이 연구소',
    title: '주차 안내(Parking guide)',
    contents:
      'I Say Lab은 금강아케이드(서울특별시 강남구 압구정로 29길 68) 2층에 위치하고 있으며, 건물 주위에 유료 또는 무료로 주차할 수 있는 공간들이 있습니다. 주차와 관련된 구체적인 내용은 I Say Lab 홈페이지에서 ‘연구소 소개’의 ‘오시는 길‘ 메뉴를 확인해 주시기 바랍니다.',
    contentsEng:
      'I Say Lab is located on the second floor of Geumgang Arcade (68, Apgujeong-ro 29-gil, Gangnam-gu, Seoul), and there are commercial or free parking spaces around the building. For more parking information, please check the “Directions" and "Parking Guide" menus on the first screen of the I Say Lab website.',
  },
]
