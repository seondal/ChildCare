import React, { useState, useContext, useEffect } from 'react'
import { Typography, Divider } from 'antd'
import Fade from 'react-reveal/Fade'
import Pic1 from './1.jpg'
import Pic2 from './2.jpg'
import Pic3 from './3.jpg'
import Pic4 from './4.jpg'
import Pic5 from './5.jpg'
import Pic6 from './6.jpg'

function ContentsPage({ num, lang }) {
  const { Title, Paragraph, Text, Link } = Typography

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

  if (num == 1) {
    return (
      <div>
        <Typography>
          <Fade bottom cascade>
            <Title level={2}>
              {lang == 'kor'
                ? '언어발달 평가 및 언어지원 프로그램'
                : 'Language development evaluation and language support program '}
            </Title>
            <Divider />

            <Paragraph
              style={
                isMobile
                  ? { display: 'flex', flexDirection: 'column' }
                  : { display: 'flex', flexDirection: 'row' }
              }
            >
              <br />
              <Title level={5}>
                {lang == 'kor'
                  ? '이화여자대학교 언어병리학과 교수인 대표와 석박사 학위의 전문가로 구성된 팀이 풍부한 임상 경험과 국내외 우수한 학술지들에 발표한 연구 결과를 기반으로 개별 맞춤형 언어지원 서비스를 제공합니다.한국의 1급 언어재활사 및 미국 CCC-SLP(American Speech-Language Hearing Association) 자격증을 보유한 대표, 그리고 한국의 국가 공인 언어재활사 자격증을 소지한 전문가들이 함께 협력하여 각 아동에게 맞춤화된 최적의 언어치료교육 서비스를 제공합니다. I Say Lab에서는 우수한 전문인력에게 가장 효과적이며 효율적인 언어치료교육 서비스를 제공받을 수 있습니다.'
                  : 'A team of experts with master`s and doctoral degrees from the Department of Communication Disorders at Ewha Womans University provides personalized language support services based on abundant clinical experience and research findings published in excellent domestic and foreign academic journals.The CEO of I Say Lab with level 1 Korean SLP certificates, and American Speech-Language Learning Association (CCC-SLP) certificates, as well as experts with nationally recognized speech-language therapy certificates in Korea, work together to provide optimal language therapy education services tailored to each child. I Say Lab offers the most effective and efficient speech therapy education services provided by excellent professionals.'}
                <Title level={4}>
                  <br /> <br />
                  {lang == 'kor'
                    ? '대상: 언어발달 지연이 의심되는 아동'
                    : 'Target demographic: Children with suspected language development delay '}
                </Title>

                <ul>
                  <li>
                    {lang == 'kor'
                      ? '전문가의 심도 있는 대면 언어평가 진행 (한국어 및 영어)'
                      : 'In-depth face-to-face language evaluation by experts (Korean and English) '}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '결과 보고서 제공 및 임동선 교수님의 부모 상담'
                      : 'Provided evaluation results report and parental counseling by Professor Dongsun Yim '}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '평가 결과에 기반한 개별 맞춤형 최적 언어 지원 서비스 제공'
                      : 'Provided individualized and optimal language support services based on evaluation results'}
                  </li>
                </ul>
              </Title>

              <img
                src={Pic1}
                style={isMobile ? {} : { width: '400px', marginLeft: '15%' }}
              />
            </Paragraph>
          </Fade>
        </Typography>
      </div>
    )
  } else if (num == 2) {
    return (
      <div>
        <Typography>
          <Fade bottom cascade>
            <Title level={2}>
              {lang == 'kor'
                ? '언어발달 전문가와 함께 하는 책읽기 프로그램 (한국어 및 영어)'
                : 'Book reading program with language development experts (Korean and English) '}
            </Title>
            <Divider />
            <br />
            <Paragraph
              style={
                isMobile
                  ? { display: 'flex', flexDirection: 'column' }
                  : { display: 'flex', flexDirection: 'row' }
              }
            >
              {' '}
              <br />
              <Title level={5}>
                {lang == 'kor'
                  ? '  한국연구재단의 지원으로 다년 간 책읽기 연구를 진행해온 연구팀이 국내외 우수한 학술지들에 발표한 연구 결과를 아낌없이 공유합니다. 어휘력, 구문 능력, 담화 능력, 그리고 문해력을 높일 수 있는 책읽기를 언어발달 전문가, 그리고 또래들과 함께 즐겁게 시도해보는 프로그램입니다. I Say Lab에서는 미국의 대형 출판사로서 국공립 학교에 책을 공급하고 있는 스콜라스틱(Scholastic)과의 업무 제휴를 통해 영어 이야기책 및 독후 활동 프로그램을 특별한 가격으로 이용할 수 있습니다. 또한 I Say Lab에서는 서울시 교육청 어린이도서관에서 제안하는 연령별 권장도서 및 웅진씽크빅에서 출간하는 다양한 주제의 책을 구비, 이를 자유롭게 이용할 수 있습니다.'
                  : 'The research team, who have been conducting research on reading for many years with the support of the National Research Foundation of Korea, incorporates the research findings published in excellent international and domestic academic journals into this program. Book reading is a program to enjoy reading books while enhancing vocabulary, syntax, discourse, and literacy skills with language development experts and peers. I Say Lab offers special prices for English storybooks and book activity programs through business partnerships with Scholastic, a large American publisher that supplies books to national and public schools. In addition, I Say Lab is equipped with recommended books by age proposed by the Children’s Library of the Seoul Metropolitan Office of Education and books on various topics published by Woongjin Thinkbig, and anybody can use them freely.'}
              </Title>
              <img
                src={Pic2}
                style={isMobile ? {} : { width: '400px', marginLeft: '15%' }}
              />
            </Paragraph>
            <br />

            <Paragraph>
              <Title level={3}>
                {lang == 'kor'
                  ? ' 1. 전문가와의 일대일 책읽기'
                  : '1. One-on-one reading with an expert '}
              </Title>
              <Paragraph>
                <Title level={5}>
                  {lang == 'kor'
                    ? '대상: 책을 좋아하는 모든 아동, 책과 친해지고 싶은 모든 아동, 책읽기에 어려움이 있는 아동'
                    : 'Target demographic: All children who like books, want to get acquainted with books, and have difficulty in reading '}
                </Title>

                <ul>
                  <li>
                    {lang == 'kor'
                      ? '한글 책읽기: 웅진씽크빅의 후원으로 다양한 주제의 책을 언어발달전문가와 함께 읽어보는 시간'
                      : 'Korean: Read books on various topics sponsored by Woongjin ThinkBig with a language development expert '}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '영어 책읽기: 스콜라스틱(Scholastic)의 후원으로 미국의 국공립 학교에서 현재 사용되고 있는 책을 원어민 수준의 전문가와 함께 읽어보는 시간'
                      : 'English: Read books currently used in US national and public schools sponsored by Scholastic with a native-speaking expert'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '연구로 검증된 효과적인 책읽기 방법을 통해 어휘력 및 문해력 촉진'
                      : 'Improve vocabulary and literacy skills through research-proven effective reading methods'}
                  </li>
                </ul>
              </Paragraph>
            </Paragraph>

            <Divider />
            <Paragraph>
              <Title level={3}>
                {lang == 'kor'
                  ? '2. 전문가와 함께하는 소집단 책읽기'
                  : '2. Reading in small groups with experts '}
              </Title>
              <Paragraph>
                <Title level={5}>
                  {lang == 'kor'
                    ? ' 대상: 책을 좋아하는 모든 아동, 책과 친해지고 싶은 모든 아동, 책읽기에 어려움이 있는 아동'
                    : 'Target demographic: All children who like books, who want to get acquainted with books, and have difficulty reading '}
                </Title>

                <ul>
                  <li>
                    {lang == 'kor'
                      ? '한글 책읽기: 웅진씽크빅의 후원으로 다양한 주제의 책을 언어발달 전문가의 지도 아래 또래들과 함께 읽어보는 시간'
                      : 'Korean: Read books on various topics sponsored by Woongjin ThinkBig with peers under the guidance of a language development expert'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '영어 책읽기: 스콜라스틱(Scholastic)의 후원으로 미국의 국공립학교에서 현재 사용되고 있는 책을 원어민 수준의 전문가의 지도 아래 또래들과 함께 읽어보는 시간'
                      : 'English: Read books currently used in US national and public schools sponsored by Scholastic with peers under the guidance of native-speaking experts. '}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '전문가의 지도 아래 또래들과 함께 책읽기(2-4명)'
                      : 'Read with peers under the guidance of an expert (2-4 people) '}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '또래와의 책읽기를 통해 어휘력, 문해력, 의사소통능력 향상'
                      : 'Improve vocabulary, literacy, and communication skills through reading with peers'}
                  </li>
                </ul>
              </Paragraph>
            </Paragraph>
            <Divider />
          </Fade>
        </Typography>
      </div>
    )
  } else if (num == 3) {
    return (
      <Typography>
        <Fade bottom cascade>
          <Title level={2}>
            {lang == 'kor'
              ? '자녀의 언어발달을 촉진하기 위한 부모 코칭 프로그램'
              : 'Parent coaching program to promote children`s language development '}
          </Title>
          <Divider />

          <br />
          <Paragraph
            style={
              isMobile
                ? { display: 'flex', flexDirection: 'column' }
                : { display: 'flex', flexDirection: 'row' }
            }
          >
            {' '}
            <br />
            <Title level={5}>
              {lang == 'kor'
                ? '많은 연구와 임상 경험들을 바탕으로, 일상에서 자녀의 언어발달에 도움을 줄 수 있는 구체적인 방법에 대해서 부모님들께 알려드립니다. 자녀와 일상에서 어떻게 상호작용해야 언어발달의 극대화할 수 있는지, 또 휴대가 간편하고 가정과 교육기관에서 쉽게 접할 수 있는 이야기책을 아동의 언어발달을 위해서 어떻게 활용할 수 있을지에 대해 알려드립니다. 현재 자녀가 있는 부모 뿐만 아니라 출산을 앞둔 예비 부모도 참여할 수 있으며, 다문화 가정과 같이 이중언어 환경에 있는 아동의 부모, 또래에 비해 언어발달이 늦은 아동의 부모 등 자녀의 언어발달에 관심이 있는 모든 부모님에게 도움이 될 것입니다.'
                : 'Based on abundant research and clinical experience, this program provides parents with specific methods that can help their child`s language development in everyday life. I Say Lab will inform you how to maximize language development in daily life and how to use storybooks that are easy to carry and access at home and educational institutions for children`s language development. The program is not limited to only parents with children but also available to prospective parents who are about to give birth, and it will help all parents interested in their children`s language development, including parents of children in bilingual environments such as multicultural families and parents of children who are delayed in language development compared to their peers.'}
            </Title>
            <img
              src={Pic3}
              style={isMobile ? {} : { width: '400px', marginLeft: '15%' }}
            />
          </Paragraph>

          <br />

          <div
            style={
              isMobile
                ? { display: 'flex', flexDirection: 'column' }
                : { display: 'flex', flexDirection: 'row' }
            }
          >
            <Paragraph>
              <Title level={4}>{lang == 'kor' ? '1. 대상' : '1. Target'}</Title>
              <Paragraph>
                <ul>
                  <li>
                    {lang == 'kor'
                      ? '아이를 기다리는 예비 부모'
                      : 'Prospective parents waiting to give birth'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '아이를 막 출산하고 아이를 처음 키워보는 초보 부모'
                      : 'New parents who have just given birth and are raising their first child'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '아이의 언어발달에 관심이 많은 부모'
                      : 'Parents interested in their child`s language development'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '언어발달이 또래에 비해 상대적으로 느린 아동의 부모'
                      : 'Parents of children whose language development is relatively slow compared to their peers'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '두 언어를 사용하는 이중언어 아동의 부모'
                      : 'Parents of bilingual children who speak two languages'}
                  </li>
                </ul>
              </Paragraph>
            </Paragraph>
            <Paragraph style={isMobile ? {} : { marginLeft: '20%' }}>
              <Title level={4}>
                {lang == 'kor'
                  ? '2. 주요 교육 내용'
                  : '2. Main contents of education'}
              </Title>
              <Paragraph>
                <ul>
                  <li>
                    {lang == 'kor'
                      ? '자녀의 언어발달을 촉진시킬 수 있는 책읽기 방법'
                      : 'How to read books to promote your child`s language development'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '자녀의 언어발달을 극대화할 수 있는 상호작용 방법'
                      : 'An interaction method to maximize your child`s language development'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '일상에서 아동에게 양질의 언어자극을 주는 방법 (1회 프로그램)'
                      : 'How to provide high-quality language stimulation to children in daily life (one-day program)'}
                  </li>
                </ul>
              </Paragraph>
            </Paragraph>
          </div>
        </Fade>
      </Typography>
    )
  } else if (num == 4) {
    return (
      <Typography>
        <Fade bottom cascade>
          <Title level={2}>
            {lang == 'kor'
              ? '언어발달 관련 영역 전문가 교육 프로그램'
              : 'Language development-related area expert training program'}
          </Title>
          <br />
          <Divider />

          <Paragraph
            style={
              isMobile
                ? { display: 'flex', flexDirection: 'column' }
                : { display: 'flex', flexDirection: 'row' }
            }
          >
            {' '}
            <Title level={5}>
              <br />
              {lang == 'kor'
                ? '언어재활사, 교사, 의사, 간호사, 사회복지사, 임상심리사, 놀이치료사 등 아동발달에 관련된 모든 전문가, 그리고 아동학, 심리학, 언어학, 컴퓨터공학, 뇌인지과학 등 언어발달에 관련된 영역에 관심을 갖고 공부하고 있는 예비 전문가를 대상으로 하는 교육입니다. 아동의 언어발달에 대해 관심이 있고 공부하고자 하는 관련 영역의 모든 전문가들을 대상으로 아동언어발달 및 부모교육 분야에서 20년 넘게 연구해 온 임동선 교수님이 직접 전문가 교육을 실시합니다. 두 가지 프로그램으로, 이중언어 아동의 언어발달과 의사소통장애에 대한 개괄적인 이해와 구체적인 임상에서의 적용 방법 교육, 그리고 단일언어 및 이중언어 아동의 부모를 대상으로 한 부모 코칭 방법 교육입니다.'
                : 'This training program is designed for pre-professionals who are currently studying and/or works in fields related to child development, such as speech-language therapists, teachers, doctors, nurses, social workers, clinical psychologists, play therapists, etc. Professor Dongsun Yim, who has been studying children`s language development and parent education for more than 20 years, will provide expert education to all experts in related fields who are interested in children`s language development. Two programs include a comprehensive understanding of communication disorders and bilingual children`s language development along with specific clinical application education, and parent coaching education for parents of monolingual and bilingual children.'}
            </Title>
            <img
              src={Pic4}
              style={isMobile ? {} : { width: '400px', marginLeft: '15%' }}
            />
          </Paragraph>
          <br />

          <Paragraph>
            <Title level={4}>
              {lang == 'kor'
                ? '1. 이중언어아동의 언어발달 및 의사소통장애'
                : '1. Language development and communication disorders in bilingual children'}
            </Title>
            <Paragraph>
              <ul>
                <li>
                  {lang == 'kor'
                    ? '이중언어 아동의 언어발달 특징'
                    : 'Characteristics of language development in bilingual children'}
                </li>
                <li>
                  {lang == 'kor'
                    ? '이중언어 아동의 언어평가 및 치료'
                    : 'Language Assessment and treatment of bilingual children'}
                </li>
                <li>
                  {lang == 'kor'
                    ? '연구 및 임상 기반 치료 예후 예측요인 분석 방법'
                    : 'Research and clinical-based treatment prognostic factors analysis method'}
                </li>
              </ul>
            </Paragraph>
          </Paragraph>

          <Divider />
          <Paragraph>
            <Title level={4}>
              {lang == 'kor'
                ? '2. 부모 코칭 방법 교육'
                : '2. Teaching the methods of parents coaching'}
            </Title>
            <Paragraph>
              <ul>
                <li>
                  {lang == 'kor'
                    ? ' 캐나다의 Hanen 부모교육 자격증을 소지한 임동선 교수님이 20년넘게 다양한 이중언어/단일언어 가정의 부모 코칭을 진행하셨던 노하우 공유'
                    : 'Professor Dongsun Yim, who holds a Hanen parent education certificate from Canada, shares her know-hows of coaching parents of various bilingual/monolingual families for over 20 years.'}
                </li>
                <li>
                  {lang == 'kor'
                    ? '책읽기 부모교육 프로그램 전문가 과정'
                    : 'Provides parent education program specialist course on book reading'}
                </li>
              </ul>
            </Paragraph>
          </Paragraph>
        </Fade>
      </Typography>
    )
  } else if (num == 5) {
    return (
      <Typography>
        <Fade bottom cascade>
          <Title level={2}>
            {lang == 'kor'
              ? '주말 프로그램: 책과 함께하는 휴식 시간'
              : 'Weekend Program: Break Time with Books'}
          </Title>
          <br />
          <br />
          <Paragraph>
            <Title level={5}>
              {lang == 'kor'
                ? '아이들은 자유롭게 책과 만나면서 언어능력을 기르고, 부모님들은 언어발달 및 책읽기와 관련된 정보를 얻을 수 있는 시간이 될 것입니다. 토요일에는 I Say Lab이 작은 도서관이 되어, 아이들은 자유롭게 책을 읽고 언어발달 전문가와 함께 다양한 독후 활동에 참여할 수 있습니다. 부모님도 함께 가벼운 마음으로 방문하여 I Say Lab의 전문가와 대화를 나누면서 언어발달에 대한 궁금한 점에 대해 정보를 얻어가실 수 있습니다.'
                : 'Children can freely encounter books to develop their language skills, and parents can get information related to language development and book reading. On Saturday, I Say Lab will turn into a small library, allowing children to freely read books and participate in various book activities with language development experts. Parents can also freely visit and talk to experts at I Say Lab to ask questions and get information about language development.'}
            </Title>
          </Paragraph>
          <br />

          <Divider />
          <Paragraph
            style={
              isMobile
                ? { display: 'flex', flexDirection: 'column' }
                : { display: 'flex', flexDirection: 'row' }
            }
          >
            {' '}
            <Paragraph>
              <Title level={5}>
                {lang == 'kor'
                  ? '대상: 책을 좋아하는 누구나'
                  : 'Target demographic: Anyone who likes books'}
              </Title>
              <Title level={5}>
                {lang == 'kor'
                  ? '그룹활동: 한 그룹당 최대 10명의 아동(신청자 수에 따라 인원 조정 가능), 한 명의 언어발달 전문가가 담당'
                  : 'Group activities: up to 10 children per group (can be adjusted according to the number of applicants) with one language development expert'}
              </Title>
              <Title level={5}>
                {lang == 'kor' ? '토요일 9:00~12:00' : 'Saturday 9:00-12:00 '}
              </Title>
              <blockquote>
                <ul>
                  <li>
                    {lang == 'kor'
                      ? '9:00-10:00 영유아 (2-3세)'
                      : '9:00-10:00 Infants/Toddlers (2-3 years old)'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '10:00-11:00 학령전기 (4-6세)'
                      : '10:00-11:00 Pre-school age (4-6 years old)'}
                  </li>
                  <li>
                    {lang == 'kor'
                      ? '11:00-12:00 학령기 (7세~13세)'
                      : '11:00-12:00 School age (7-13 years old)'}
                  </li>
                </ul>
              </blockquote>
              <ul>
                <li>
                  {lang == 'kor'
                    ? '한국어 및 영어 프로그램'
                    : 'Korean and English programs are provided'}
                </li>
                <li>
                  {lang == 'kor'
                    ? ' 언어발달 전문가와 2-3권의 책 읽은 후 다양한 독후 활동 진행'
                    : 'Various post-reading activities after reading 2-3 books with a language development expert'}
                </li>
                <li>
                  {lang == 'kor'
                    ? '아동 연령별로 책읽기 수업 참여 후 열린 책 방에서 아동 혼자 또는 부모님과 개별 책읽기 활동 진행 가능'
                    : 'Children can read books alone or with their parents in an open area after participating in a reading class'}
                </li>
              </ul>
            </Paragraph>
            <img
              src={Pic5}
              style={isMobile ? {} : { width: '400px', marginLeft: '15%' }}
            />
          </Paragraph>
          <br />
          <br />
        </Fade>
      </Typography>
    )
  } else if (num == 6) {
    return (
      <Typography>
        <Fade bottom cascade>
          <Title level={2}>
            {lang == 'kor'
              ? '특별 프로그램: 여름/겨울방학 책읽기 캠프 (한국어 및 영어)'
              : 'Special Program: Summer/Winter Vacation Reading Camp (Korean and English)'}
          </Title>
          <br />
          <br />
          <Paragraph>
            <Title level={5}>
              {lang == 'kor'
                ? '책, 그리고 친구들과 함께 언어발달 전문가의 지도 아래 다양한 활동을 하면서 자유로운 의사소통을 시도하고 즐거운 말하기를 배울 수 있는 시간이 될 것입니다. I Say Lab에서는 여름방학과 겨울방학에 책읽기 캠프를 진행합니다. 아동의 흥미와 필요에 따라 한국어 또는 영어 프로그램 중에서 선택할 수 있으며, 언어발달 전문가와 또래와의 책읽기 캠프를 통해 방학 동안 언어와 의사소통, 그리고 정서 또한 한층 성장하는 시간이 될 것입니다.'
                : 'Through books and with friends, children can improve communication skills and learn to speak in a fun way by experiencing various activities under the guidance of a language development expert. I Say Lab holds a book reading camp during summer and winter vacation. Parents can choose between Korean and English programs according to their children`s interests and needs. Book reading camp will provide an opportunity for children to grow language, communication, and emotions with language development experts and peers. '}
            </Title>
          </Paragraph>
          <br />

          <Divider />
          <Paragraph
            style={
              isMobile
                ? { display: 'flex', flexDirection: 'column' }
                : { display: 'flex', flexDirection: 'row' }
            }
          >
            {' '}
            <Paragraph>
              <Title level={5}>
                {lang == 'kor'
                  ? '대상: 학령전기 아동'
                  : 'Target demographic: Preschool children'}
              </Title>
              <Title level={5}>
                {lang == 'kor'
                  ? '소집단: 언어발달 수준을 고려한 2-4명의 소집단 구성, 한 명의 언어발달 전문가가 담당'
                  : 'Small group class: A small group of 2-4 children with similar level of language development accompanied by one language development expert'}
              </Title>

              <ul>
                <li>
                  {lang == 'kor'
                    ? '한국어 및 영어 프로그램'
                    : 'Korean and English programs are provided'}
                </li>
                <li>
                  {lang == 'kor'
                    ? '월~금 매일 3시간(오전), 3주 간 진행(주차 선택 가능)'
                    : 'The program runs for 3 hours a day for 3 weeks from Monday to Friday (Program week can be selected)'}
                </li>
                <li>
                  {lang == 'kor'
                    ? '매주 주제를 정하여 언어발달 전문가와 함께 관련된 책을 읽으면서 다양한 활동 진행'
                    : 'Each day, book reading and various activities will be implemented related to a specific weekly topic with a language development expert'}
                </li>
              </ul>
            </Paragraph>
            <img
              src={Pic6}
              style={isMobile ? {} : { width: '400px', marginLeft: '15%' }}
            />
          </Paragraph>
        </Fade>
      </Typography>
    )
  } else {
    return <div>1입니다.</div>
  }
}
export default ContentsPage
