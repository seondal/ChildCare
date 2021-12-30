import React from 'react'
import styled from 'styled-components'
import map from '../mapformobile.gif'

const Wrapper = styled.div`
  margin-top: 20px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  border-left: 15px solid black;
  padding: 18px;
  font-size: 0.9rem;
  margin: 20px 0px;

  li {
    list-style: none;
  }
`
const Collab = () => {
  return (
    <Wrapper>
      <div className="img-wrapper">
        <img style={{ width: '100%' }} src={map} />
      </div>
      <Card style={{ borderColor: '#C77F5E' }}>
        <h3>USA</h3>
        <div className="contents">
          <li>Stanford University (Language and Cognition Lab)</li>
          <li>Northwestern University</li>
          <li>Hofstra University (NY) </li>
          <li>Richmond streetschool (CA)</li>
        </div>
      </Card>
      <Card style={{ borderColor: '#CFC661' }}>
        <h3>Canada</h3>
        <div className="contents">
          <li>University of Toronto</li>
        </div>
      </Card>
      <Card style={{ borderColor: '#DB6788' }}>
        <h3>Portugal</h3>
        <div className="contents">
          <li>Interactive Technologies Institute, University of Lisbon</li>
        </div>
      </Card>
      <Card style={{ borderColor: '#C667DC' }}>
        <h3>Korea</h3>
        <div className="contents">
          <li>Samsung Medical Center (삼성 서울병원)</li>
          <li>
            Early childhood education centers in Seoul and Gyeonggi-do (서울 및
            경기도 소재 유아교육기관)
          </li>
          <li>Seoul Foreign School (서울외국인학교) </li>
          <li>Seoul International School (서울국제학교)</li>
          <li>North London Collegiate School Jeju (NLCS 제주)</li>
          <li>Chadwick International School (채드윅 송도 국제학교)</li>
          <li>Dulwich College Seoul (덜위치칼리지 서울영국학교)</li>
          <li>Postech (포항공과대학교)</li>
          <li>
            Korean Institute of Brief Family Therapy (한국단기가족치료연구소)
          </li>
          <li>
            Seoul Seobu Distirct Office of Education (서울특별시 서부교육지원청)
          </li>
        </div>
      </Card>
    </Wrapper>
  )
}

export default Collab
