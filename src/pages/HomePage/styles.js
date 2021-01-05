import styled from 'styled-components'

export const PlanView = styled.div`
  width: 90%;
  padding-left: 15px;
`

export const ReportUsageView = styled.div`
  width: 100%;
`

export const UsageReportTitle = styled.h1`
  color: black;
  padding-bottom: 12px;
  padding-right: 60px;
  font-size: 30px;
  line-height: 1;
`

export const PlanTitle = styled.h1`
  color: black;
  padding-bottom: 15px;
  font-weight: bold;
  padding-top: 20px;
  font-size: 18px;
  line-height: 1;
`

export const PlanItems = styled.h2`
  color: black;
  padding-bottom: 5px;
  font-size: 14px;
  line-height: 1;
  font-family: roboto;
  font-weight: 500;
  line-height: normal;
`

export const ItemSucess = styled.img`
  width: 18px;
  padding-right: 7px;
`;

export const GridHome = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`

export const UsageReportInfoView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: auto;
  
  box-border: 5px solid #151515;
  box-shadow: 3px 3px 6px rgba(184, 184, 184, 54.2);
  box-radius: 0.58571429rem;
  box-padding: 0.833em 1em;
  box-background-color: #ffffff;
  border-radius: 10px;

  padding: 3%;

  margin-bottom: -50px;

  @media (min-width: 1920px) {
    margin-bottom: -50px;
    margin-left: 250px;
    width: 800px;
  }

  @media (max-width: 1366px) {
    margin-bottom: -30px;
    margin-left: 100px;
    width: 655px;
  }

  @media (max-width: 1024px) {
    margin-bottom: -25px;
    margin-left: 180px;
    width: 825px;
  }
`

export const PlanInfoView = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: fit-content;

  box-border: 5px solid #151515;
  box-shadow: 3px 3px 6px rgba(184, 184, 184, 54.2);
  box-radius: 0.58571429rem;
  box-padding: 0.833em 1em;
  box-background-color: #ffffff;
  border-radius: 10px;

  padding: 3%;

  margin-bottom: -50px;

  @media (min-width: 1920px) {
    margin-bottom: -50px;
    margin-left: -300px;
    width: 340px;
  }

  @media (max-width: 1366px) {
    margin-bottom: -30px;
    margin-left: -40px;
    width: 300px;
  }

  @media (max-width: 1024px) {
    margin-bottom: -25px;
    margin-left: -80px;
    width: 340px;
  }
`