import { logoMenuCaf, unionSucess } from '../../common/images'
import { useTranslation } from "react-i18next"
import { DatePicker, Table, List, Col, Row } from 'antd';
import { MailOutlined, MobileOutlined, FileSyncOutlined, PlayCircleOutlined } from '@ant-design/icons'
import 'moment/locale/pt-br';
import locale from 'antd/es/date-picker/locale/pt_BR';
import 'antd/dist/antd.css';
import moment from 'moment';
import {
  PlanView,
  UsageReportTitle,
  GridHome,
  UsageReportInfoView,
  ReportUsageView,
  PlanInfoView,
  PlanTitle,
  PlanItems,
  ItemSucess
} from './styles'
import { SingleView } from '../../layouts/SingleView'
import ProgressLine from '../../layouts/ProgressLine'

const HomePage = ({ ...props }) => {
  const { t } = useTranslation();

  const columns = [
    {
      dataIndex: 'type',
      key: 'type',
      width: '200px',
    },
    {
      dataIndex: 'executions',
      key: 'executions',
    },
    {
      key: 'blank',
      width: '80px',
    },
    {
      key: 'total',
      dataIndex: 'total',
    }
  ];
  
  const data = [
    {
      key: '1',
      type: <List
        itemLayout="horizontal"
        dataSource={[{title: 'SMS'}]}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<MobileOutlined/>}
              title={<div style={{color: '#39C560', fontWeight: 'bold'}}>{item.title}</div>}
              description="Valor unitário: R$ 36,00"
            />
          </List.Item>
        )}
      />,
      executions: 'Execuções: 36',
      total: 'Total: R$ 2.400,00',
    },
    {
      key: '2',
      type: <List
        itemLayout="horizontal"
        dataSource={[{title: 'E-mail'}]}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<MailOutlined/>}
              title={<div style={{color: '#F1D53F', fontWeight: 'bold'}}>{item.title}</div>}
              description="Valor unitário: R$ 36,00"
            />
          </List.Item>
        )}
      />,
      executions: 'Execuções: 36',
      total: 'Total: R$ 2.400,00',
    },
    {
      key: '3',
      type: <List
        itemLayout="horizontal"
        dataSource={[{title: 'Execuções'}]}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<PlayCircleOutlined />}
              title={<div style={{color: '#EB5757', fontWeight: 'bold'}}>{item.title}</div>}
              description="Valor unitário: R$ 36,00"
            />
          </List.Item>
        )}
      />,
      executions: 'Execuções: 36',
      total: 'Total: R$ 2.400,00',
    },
    {
      key: '4',
      type: <List
        itemLayout="horizontal"
        dataSource={[{title: 'Documentos copia'}]}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<FileSyncOutlined />}
              title={<div style={{color: '#2F80ED', fontWeight: 'bold'}}>{item.title}</div>}
              description="Valor unitário: R$ 36,00"
            />
          </List.Item>
        )}
      />,
      executions: 'Execuções: 36',
      total: 'Total: R$ 2.400,00',
    },
  ];

  const tableState = {
    pagination: false,
    size: 'default',
    showHeader: false,
    footer: false,
    hasData: true,
  };
  
  return (
    <SingleView icon={<img src={logoMenuCaf} width="140px" alt=""/>} title="Home" 
      contentComponent={
        <GridHome>
          <UsageReportInfoView>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  marginBottom: '12%'
                }}
              >
                  <ReportUsageView style={{alignContent: 'center'}}>
                  <Row>
                    <Col span={18}><UsageReportTitle>{t('home.report.title')}</UsageReportTitle></Col>
                    <Col span={6} style={{alignContent: 'flex-end'}} ><DatePicker defaultValue={moment('2021/01', 'YYYY/MM')} picker="month" locale={locale}/></Col>
                  </Row>
                  <Row style={{marginBottom: '15px', marginTop: '25px'}}>
                    <Col span={12} style={{fontWeight: 'bold', fontSize: '18px'}}>{t('home.report.distribution')}</Col>
                    <Col span={12} style={{fontWeight: 'bold', textAlign: "right", fontSize: '18px'}} >Total: R$ 9.600,00</Col>
                  </Row>
                  <ProgressLine
                    visualParts={[
                      {
                        percentage: "15%",
                        color: "#39C560"
                      },
                      {
                        percentage: "17%",
                        color: "#F1D53F"
                      },
                      {
                        percentage: "18%",
                        color: "#EB5757"
                      },
                      {
                        percentage: "50%",
                        color: "#2F80ED"
                      }
                    ]}
                  />
                  <div>
                    <Table
                      {...tableState}
                      columns={columns}
                      dataSource={data}
                    />
                  </div>
                  </ReportUsageView>
              </div>
          </UsageReportInfoView>
          <PlanInfoView>
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  marginBottom: '12%'
                }}
              >
                <PlanView>
                  <PlanTitle>{t('home.plan.title')}</PlanTitle>
                    <PlanItems><ItemSucess src={unionSucess} alt="unionSucess"/>Biometria Facial</PlanItems>
                    <PlanItems><ItemSucess src={unionSucess} alt="unionSucess"/>Documentos copia</PlanItems>
                    <PlanItems><ItemSucess src={unionSucess} alt="unionSucess"/>Indicação de Fraude</PlanItems>
                    <PlanItems><ItemSucess src={unionSucess} alt="unionSucess"/>Automação e Onboarding</PlanItems>
                  <PlanTitle>{t('home.plan.additional_consultations')}s</PlanTitle>
                      <PlanItems><ItemSucess src={unionSucess} alt="unionSucess"/>Acordo de Leniência</PlanItems>
                      <PlanItems><ItemSucess src={unionSucess} alt="unionSucess"/>Banco Nacional de Mandados de Prisão</PlanItems>
                      <PlanItems><ItemSucess src={unionSucess} alt="unionSucess"/>Certidão Antecedentes Criminais (Polícia Federal)</PlanItems>
                </PlanView>
              </div>
          </PlanInfoView>
        </GridHome>
    }
    />
  )  
}    

export { HomePage }
