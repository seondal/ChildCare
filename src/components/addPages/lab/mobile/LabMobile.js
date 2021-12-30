import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 20px;

  .important {
    padding: 20px;
    text-align: center;
    border: solid 1px lightgrey;
    margin-bottom: 50px;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-left: 10px solid black;
  padding: 18px;
  font-size: 0.9rem;
  margin: 20px 0px;

  li {
    list-style: none;
  }
`
const LabMobile = ({ lang }) => {
  return (
    <Wrapper>
      <div className="important">
        2020.11.25
        <br /> <br />
        {lang == 'kor'
          ? '주식회사 임동선아이세이언어연구소 (I Say Lab) 설립 '
          : 'Establishment of ImDongSun Isay Language Research Institute}'}
        <br />
        {lang == 'kor'
          ? '(이화여자대학교 기술지주회사 자회사) '
          : '(I Say Lab)'}
      </div>
      <Card style={{ borderColor: '#C77F5E' }}>
        <h3>
          {lang == 'kor'
            ? '1) 신뢰할 수 있는 공인 전문가의 차별화된 언어치료 서비스 제공'
            : '1) Provide differentiated speech therapy services from trusted and certified experts'}
        </h3>
        <div className="contents">
          {lang == 'kor'
            ? 'I Say Lab의 대표인 임동선 교수님은 이화여자대학교 언어병리학과 교수이자 한국 1급 언어재활사 및 미국 CCC-SLP(American Speech-Language Hearing Association) 자격증, 그리고 캐나다 Hanene centre의 부모교육 자격증을 보유한 국제적으로 공인된 임상 전문가입니다. I Say Lab에서는 임동선 교수님이 오랜 시간 연구 및 임상을 통해 그 효과를 검증한 근거 기반 치료 서비스를 제공합니다.'
            : 'Professor Dongsun Yim, CEO of I Say Lab, is a professor of Communication Disorders at Ewha Womans University and an internationally recognized clinical expert with a level 1 Korean SLP certification, US CCC-SLP (American Speech-Language Hearing Association), and a parental education certificate from Hanen Centre in Canada.          I Say Lab provides evidence-based treatment services that Professor Yim has verified through long-term research and clinical trials.'}
        </div>
      </Card>
      <Card style={{ borderColor: '#CFC661' }}>
        <h3>
          {lang == 'kor'
            ? '2) 이중언어아동 특화 치료 서비스 제공'
            : '2) Provide specialized treatment services for bilingual children'}
        </h3>
        <div className="contents">
          <li>
            {lang == 'kor'
              ? 'I Say Lab에서는 공인된 언어재활 전문가가 영어와 한국어 언어치료교육 서비스를 제공합니다. 다문화 가정의 아동, 외국에서 한국으로 돌아와 정착하는 리터니(returnee) 및 외국인, 그리고 부모의 해외 파견, 유학 등으로 외국에 장·단기적으로 거주하는 아동 등 다양한 언어에 노출되는 아동에게 특화된 언어치료교육 서비스를 제공합니다.'
              : 'With certified experts, I Say Lab provides specialized English and Korean speech-language therapy for children from multicultural families, returnees and foreigners who returned to Korea from abroad, and children who live in foreign countries for a long and short period of time due to their parents’ overseas work and education.'}
          </li>
        </div>
      </Card>
      <Card style={{ borderColor: '#DB6788' }}>
        <h3>
          {lang == 'kor'
            ? '3) 부모 및 전문가 맞춤형 교육 프로그램 제공'
            : '3) Provide customized parent and professional education programs'}
        </h3>
        <div className="contents">
          <li>
            {lang == 'kor'
              ? 'I Say Lab의 대표인 임동선 교수님은 임상 현장에서 20년 이상 부모를 대상으로 부모교육을 진행해 왔으며, 또한 서울 및 경기 지역의 유아교육 기관에서 부모님들을 대상으로 책읽기 교육 프로그램을 실시하여 그 효과를 검증하였습니다. 부모님들이 자녀를 대상으로, 또 전문가들이 임상 및 교육 현장에서 바로 적용할 수 있는 양질의 정보들을 제공합니다.'
              : 'Professor Yim, CEO of I Say Lab, has been conducting parental education for parents for more than 20 years in the clinical field, and book reading education programs in   the early childhood education institutions in Seoul and Gyeonggi Province, and she has verified its effectiveness. Also, she provides quality information that parents can apply directly to their children and experts in clinical and educational fields.'}
          </li>
        </div>
      </Card>
      <Card style={{ borderColor: '#C667DC' }}>
        <h3>
          {lang == 'kor'
            ? '4) 사업화 및 기술 개발 네트워크 확보'
            : '4) Secure a network for commercialization and technology development'}
        </h3>
        <div className="contents">
          {lang == 'kor'
            ? 'I Say Lab의 대표인 임동선 교수님이 오랫동안 연구에 기반하여 축적한 지식과 현장에서의 경험을 토대로, 언어치료교육 서비스 제공에 최적화된 온라인 플랫폼을 개발하여 자연발화 음성 빅데이터 구축, 인공지능 활용 진단 및 치료 자동화를 목표로 기술 개발 네트워크를 지속적으로 확보하고 있습니다.'
            : 'Professor Yim, CEO of I Say Lab, continues to secure a technology development network to build big date of natural speech, diagnose through artificial intelligence, and    provide automating treatment by developing an online platform optimized for language therapy education services.'}
        </div>
      </Card>

      <Card style={{ borderColor: '#C77F5E' }}>
        <h3>
          {lang == 'kor'
            ? '5) 접근성 높은 유비쿼터스 서비스 제공'
            : '5) Proovide ubiquitous services with high accessibility'}
        </h3>
        <div className="contents">
          {lang == 'kor'
            ? 'I Say Lab에서는 임상과 연구를 접목하여 STT(Speech To Text), TTS(Text To Speech) 등 AI 음성인식 기술을 활용한 빅데이터 기반의 언어치료교육 서비스를 실현하고자 합니다. 이를 통해 언제, 어디서나, 누구나 언어치료교육 서비스를 이용할 수 있는 편리한 유비쿼터스 환경을 제공하는 데에 선도적인 역할을 할 것입니다. '
            : 'I Say Lab aims to realize big data-based speech therapy education services using AI speech recognition technologies such as STT (Speech To Text) and TTS (Text To Speech) by combining clinical and research. This will play a leading role in providing a convenient ubiquitous environment where anyone can use speech therapy education services anytime, anywhere.'}
        </div>
      </Card>
    </Wrapper>
  )
}

export default LabMobile
