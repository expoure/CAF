import React, { useRef, useState, useEffect } from 'react'
import { SingleView } from '../../layouts/SingleView'
import { useParams } from 'react-router-dom'
import { getExecutions } from '../../services/api'
import { Table } from '../../components/atomos/Table'
import { Radio } from '../../components/atomos/Radio'
import { useAuth } from '../../contexts/auth.context'
import { Button } from '../../components/atomos/Button'
import { Row } from './Row'
import { useMessage } from '../../contexts/message.context'
import {
  GridTableFilter,
  Breadcrumb
} from './styles'
import { Form } from '@unform/web'
import { logoMenuCaf } from '../../common/images'
import { useTranslation } from 'react-i18next'


const ListExecutionsPage = ({ ...props }) => {
  const { reportName } = props.location.state
  const { t } = useTranslation();
  const { reportId } = useParams()
  const formRef = useRef(null)
  const [executions, setExecutions] = useState([])
  const { onLogout } = useAuth()
  const { onSignal, onMessageSuccess, onMessageFailed } = useMessage()
  useEffect(() => {
    getExecutionsFilter()
  }, [reportId])
  const getExecutionsFilter = status => {
    onSignal()
    getExecutions(reportId, status && status.status !== 'todos' ? status : undefined)
      .then(data => {
        setExecutions(data.docs)
        onMessageSuccess()
      })
      .catch(error => {
        onLogout()
        onMessageFailed(t('executions.error'))
      })
  }
  return (
    <SingleView icon={<img src={logoMenuCaf} width="150px" alt=''/>} title="Lista de execuções" 
      contentComponent={
        <div>
          <Breadcrumb>{reportName}</Breadcrumb>
          <GridTableFilter>
            <div style={{paddingBotton: 20, marginLeft : 200 }}>
            <Table
              columns={[
                { displayName: t('executions.type')},
                { displayName: t('executions.status')},
                { displayName: t('executions.name')}
              ]}
            >
              <tbody>
                {executions.map(execution => {
                  return (
                    <Row
                      key={execution.id}
                      {...execution}
                    />
                  )
                })}
              </tbody>
            </Table>
            </div>
            <div style={{paddingBotton: 20, marginLeft : 120 }}>
              <Form ref={formRef} onSubmit={status => getExecutionsFilter(status)}>
                <h2>{t('executions.filter')}</h2>
                <Radio 
                  label={t('executions.status')}
                  name='status'
                  initialValue={'todos'}
                  options={[
                    { label: t('executions.filters.all'), value: 'todos' },
                    { label: t('executions.filters.approved'), value: 'aprovado' },
                    { label: t('executions.filters.disapproved'), value: 'reprovado' },
                    { label: t('executions.filters.pending'), value: 'pendente' },
                    { label: t('executions.filters.ocr_pending'), value: 'pendente ocr' },
                    { label: t('executions.filters.processing'), value: 'processando' }
                ]}/>
                <Button type="submit">{t('executions.filter_action')}</Button>
              </Form>
            </div>   
          </GridTableFilter>
        </div>
      }
    />

  )
}

export { ListExecutionsPage }
    