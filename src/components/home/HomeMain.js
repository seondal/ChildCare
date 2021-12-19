import React, { useState, useContext, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MenuBar from '../MenuBar'
import '../../App.css'
import styled from 'styled-components'
import BackgroundImage from './Main2.jpg'
import Welcome from './welcome.jpg'

import { Typography, Divider, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { HomeOutlined, ReadOutlined, AlertOutlined } from '@ant-design/icons'
import { FcHome, FcNews, FcGenealogy } from 'react-icons/fc'
import { withRouter } from 'react-router'
import Fade from 'react-reveal/Fade'

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

  @media (max-width: 430px) {
    overflow-x: hidden;
  }
`

const ImageWrapper = styled.image`
  background: url(${props => props.src});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;

  @media (max-width: 430px) {
    padding: 10px;
    padding-bottom: 100px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0px 100%;
    .title {
      width: 22rem;
      margin-top: 30px;
      letter-spacing: 1px;
      line-height: normal;
    }
  }
`

const TextWrapper = styled.div`
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 12}px;
  font-weight: ${props => props.weight || 'bold'};
  margin-top: ${props => props.margin || '50px'};
  font-family: 'payboocExtraBold';

  @media (max-width: 1024px) {
    font-size: ${props => props.size - 10 || 12}px;
  }
  @media (max-width: 430px) {
    font-size: ${props => props.size - 12}px;
    padding-left: 30px;
  }
`

const DetailWrapper = styled.div`
  background-color: rgba(237, 237, 237, 0.7);
  font-size: 13px;
  height: auto;
  width: 600px;
  margin-top: 10%;
  padding: 10px;
  white-space: pre-wrap;
  font-family: 'payboocBold';

  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 100%;
    padding: 20px;
    font-size: 10px;
    height: auto;
    background-color: rgba(237, 237, 237, 0.5);
  }
`

const WelcomeWrapper = styled.div`
  width: 70%;
  height: 400px;
  display: flex;
  margin-top: 10%;
  background-color: rgba(237, 237, 237, 0.7);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;

  @media (max-width: 430px) {
    display: flex;
    margin-top: 20px;
    margin-bottom: 50px;
    width: 90%;
    padding: 30px;
    padding-top: 50px;
    height: auto;
    flex-direction: column;

    .contents {
      line-height: 25px;
      font-size: 11px;
    }
  }
`

const WelcomeImage = styled.image`
  background: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  height: 400px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
`

const WelcomeImage2 = styled.image`
  background: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 50%;
  height: 200px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 430px) {
    display: block;
    margin-bottom: 50px;
  }
`

const WelcomeText = styled.div`
  width: 50%;
  padding: 30px;
  height: 400px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(237, 237, 237, 0);
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 430px) {
    padding: 0;
    margin: 0px;
  }
`

const CategoryWrapper = styled.div`
  width: 70%;
  height: 400px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding: 5%;
  align-items: center;
  text-align: center;
  margin-bottom: 1%;

  @media (max-width: 430px) {
    height: auto;
    width: 80%;
    padding: 50px 0px;
    margin-bottom: 10px;
    margin-top: 10px;

    .contents {
      line-height: 25px;
      font-size: 13px;
      text-align: center;
    }
  }
`

const BannerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const Banner = styled.div`
  background-color: rgba(237, 237, 237, 0.7);
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  &:hover {
    background-color: #f9be00;
    cursor: pointer;
  }

  @media (max-width: 430px) {
    margin: 10px;
    margin-bottom: 0px;
  }
`

function HomeMain({ match }) {
  const [lang, setLang] = useState(match.params.lang)
  console.log(lang)
  const { Title, Paragraph, Text, Link } = Typography
  const classes = useStyles()
  const history = useHistory()

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

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    setLang(match.params.lang)
  }, [match.params.lang])

  return (
    <div>
      <Wrapper>
        <MenuBar change={lang} />
        <ImageWrapper src={BackgroundImage}>
          <Fade bottom cascade>
            <TextWrapper className="title" size="27" margin="10%">
              {' '}
              {lang == 'kor'
                ? '아이들의 꿈은 언어로부터 시작됩니다'
                : 'Children’s dreams start with language'}
            </TextWrapper>
            <TextWrapper className="title" size="35" color="#F9BE00">
              {' '}
              {lang == 'kor'
                ? ' 아이들의 꿈이 시작되는 곳\nI Say LAB'
                : 'I Say Lab, A place where children’s dreams begin'}
            </TextWrapper>
            <DetailWrapper>
              {lang == 'kor'
                ? '아이세이 언어연구소는 언어발달을 역동적으로 습득하는 시기에 아동이 타고난 잠재력과 다양한 언어적 활동을 통해 아동의 환경을 최적화하여,아동의 언어 및 뇌인지 발달이 극대화되고 학습에 연결될 수 있는 방법을 끊임없이 연구하고 있는 Think Tank(지식공동체)입니다.'
                : 'I Say Lab is a Think Tank (Communities of Practice) constantly discovering ways to maximize children’s language and cognitive brain Development. We aim to connect children to learning by optimizing the child’s environment and their innate potential through various linguistic activities at a time when language development is dynamically acquired.'}
              <br /> <br />
              <br />
              {lang == 'kor'
                ? ' 아이세이 언어연구소는 언어를 한참 배우고 언어 활동을 좋아하는 아동 또는 언어발달이 조금 느린 아동, 두 언어를 사용하는 이중언어 아동 모두를 환영합니다.  아이세이 언어연구소는 모든 아동들이 즐겁게 언어를 사용하는 방법을 배우고, 타인과의 의사소통에서 자신의 잠재력을 온전히 발휘할 수 있도록 돕는 역할을 하고자 합니다. 다년 간의 연구를 통해 축적한 이론적 배경과 특허 기반 프로그램은 아이세이 언어연구소에서만 제공할 수 있는 특화된 기술로, 아동의 언어 능력의 정확한 평가와 효과적인 언어 지원 서비스를 제공합니다.'
                : 'I Say Lab welcomes all children who are actively learning language and interested in language activities, including children who are slow in language development, and bilingual children who speak two languages. I Say Lab aims to help all children learn how to use language in a fun way and to reach their full potential in communicating with others. I Say Lab provides specialized technologies and patent-based programs developed through many years of research and in alignment with theoretical backgrounds, offering an accurate evaluation of children’s language skills and effective language support services.'}
            </DetailWrapper>
          </Fade>
        </ImageWrapper>

        <WelcomeWrapper>
          <WelcomeImage src={Welcome} />
          <WelcomeText>
            {' '}
            <Fade bottom cascade>
              <Typography>
                <Title
                  level={isMobile ? 4 : 3}
                  style={
                    isMobile
                      ? {
                          marginBottom: '20px',
                          fontFamily: 'payboocExtraBold',
                        }
                      : { marginBottom: '50px', fontFamily: 'payboocExtraBold' }
                  }
                >
                  {lang == 'kor'
                    ? ' ISayLab에 오신것을 환영합니다'
                    : 'Welcome To ISayLab'}
                </Title>
                <Paragraph>
                  <Title
                    className="contents"
                    level={5}
                    style={{
                      marginBottom: '20px',
                      fontFamily: 'payboocLight',
                    }}
                  >
                    {lang == 'kor'
                      ? ' 한국연구재단의 지원으로 다년 간 언어발달 및 언어처리 능력에 대한 연구를 진행해 온 연구팀이 국내외 우수한 학술지에 발표한 연구 결과를 아낌없이 공유합니다.'
                      : ' The research team, who have been conducting research on reading for many years with the support of the National Research Foundation of Korea, incorporates the research findings published in excellent international and domestic academic journals into this program.'}
                  </Title>
                  <Title
                    className="contents"
                    level={5}
                    style={{
                      marginBottom: '20px',
                      fontFamily: 'payboocLight',
                    }}
                  >
                    {lang == 'kor'
                      ? '임동선 교수님을 비롯한 여러 연구진에 대해서 알아보세요.'
                      : 'Learn about Professor Dongsun Yim  and other researchers.'}
                  </Title>
                </Paragraph>
                <Button
                  onClick={() => history.push(`/lab/kor`)}
                  style={{
                    borderColor: 'goldenrod',
                    color: 'goldenrod',
                    fontWeight: 'bold',
                    fontFamily: 'payboocMedium',
                    marginTop: '30px',
                  }}
                >
                  {lang == 'kor' ? '더알아보기' : 'Learn More'}
                </Button>
              </Typography>
            </Fade>
          </WelcomeText>
        </WelcomeWrapper>

        <CategoryWrapper>
          <Fade bottom cascade>
            <Typography>
              <Title
                level={isMobile ? 4 : 3}
                style={
                  isMobile
                    ? {
                        marginBottom: '50px',
                        fontFamily: 'payboocExtraBold',
                      }
                    : {
                        marginBottom: '50px',
                        fontFamily: 'payboocExtraBold',
                      }
                }
              >
                {lang == 'kor'
                  ? 'ISayLab에 대하여 더 알아보세요!'
                  : 'Learn More about ISayLab!'}
              </Title>
              <Title
                className="contents"
                level={5}
                style={{
                  marginBottom: '50px',
                  fontFamily: 'payboocMedium',
                }}
              >
                {lang == 'kor'
                  ? ' 아이세이 언어연구소의 연구원, 프로그램을 알아보세요. 아래의 배너를 클릭하여 정보를 확인해 보세요.'
                  : ' Find out about researchers and programs at the ISayLab. Click the banner below to check the information.'}
              </Title>
            </Typography>
          </Fade>
          <BannerWrapper>
            <Fade bottom cascade>
              <Banner onClick={() => history.push(`/lab/kor`)}>
                <FcHome
                  style={{
                    fontSize: '40px',
                    marginTop: '10px',
                    marginLeft: '30px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'payboocExtraBold',
                    marginBottom: '5px',
                  }}
                >
                  {' '}
                  연구소{' '}
                </p>
                <p style={{ fontFamily: 'payboocBold' }}> Lab </p>
              </Banner>
              <Banner onClick={() => history.push(`/program/kor`)}>
                <FcGenealogy
                  style={{
                    fontSize: '40px',
                    marginTop: '10px',
                    marginLeft: '30px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'payboocExtraBold',
                    marginBottom: '5px',
                  }}
                >
                  {' '}
                  프로그램{' '}
                </p>
                <p style={{ fontFamily: 'payboocBold' }}> Program </p>
              </Banner>

              <Banner onClick={() => history.push(`/board/kor`)}>
                <FcNews
                  style={{
                    fontSize: '40px',
                    marginTop: '10px',
                    marginLeft: '30px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'payboocExtraBold',
                    marginBottom: '5px',
                  }}
                >
                  {' '}
                  공지사항{' '}
                </p>
                <p style={{ fontFamily: 'payboocBold' }}> News </p>
              </Banner>
            </Fade>
          </BannerWrapper>
        </CategoryWrapper>

        <WelcomeWrapper>
          {isMobile ? (
            <></>
          ) : (
            <WelcomeImage2
              src={
                'https://www.dongsunyim.com/assets/images/front-matter/logo-icon-fill@2x.png'
              }
            />
          )}

          <WelcomeText>
            {' '}
            <Fade bottom cascade>
              <Typography>
                <Title
                  level={isMobile ? 5 : 3}
                  style={
                    isMobile
                      ? { marginBottom: '30px', fontFamily: 'payboocExtraBold' }
                      : {
                          marginBottom: '50px',
                          fontFamily: 'payboocExtraBold',
                        }
                  }
                >
                  {lang == 'kor'
                    ? '아동언어연구실을 더 알아보세요!'
                    : 'Learn More about Child-Language Lab.'}
                </Title>
                <Paragraph>
                  <Title
                    className="contents"
                    level={5}
                    style={{
                      marginBottom: '20px',
                      fontFamily: 'payboocLight',
                    }}
                  >
                    {lang == 'kor'
                      ? ' 아동언어연구실에서는 아이들이 언어를 배우는 방법과 언어 학습이 어떻게 무너질 수 있는지에 대해 연구합니다.'
                      : ' We study how children learn language and also how language learning can break down.'}
                  </Title>
                  <Title
                    className="contents"
                    level={5}
                    style={{
                      marginBottom: '20px',
                      fontFamily: 'payboocLight',
                    }}
                  >
                    {lang == 'kor'
                      ? ' 저희의 목표는 언어 학습에 대한 인지 언어 이론에 대한 우리의 시각을 넓히고 언어 장애가 있는 아이들에게 더 정확한 평가와 더 효과적인 개입 서비스를 제공하는 것입니다.'
                      : ' Our aim is to broaden our perspective on cognitive-linguistic theories of language learning and to achieve more accurate assessment and more effective intervention services for children who have language difficulties.'}
                  </Title>
                </Paragraph>
                <Button
                  onClick={() => window.open('https://www.dongsunyim.com/')}
                  style={{
                    borderColor: 'darkgreen',
                    color: 'darkgreen',
                    fontWeight: 'bold',
                    fontFamily: 'payboocMedium',
                  }}
                >
                  {lang == 'kor' ? '더알아보기' : 'Learn More'}
                </Button>
              </Typography>
            </Fade>
          </WelcomeText>
          {isMobile ? (
            <WelcomeImage2
              src={
                'https://www.dongsunyim.com/assets/images/front-matter/logo-icon-fill@2x.png'
              }
            />
          ) : (
            <></>
          )}
        </WelcomeWrapper>
      </Wrapper>
    </div>
  )
}

export default withRouter(HomeMain)
