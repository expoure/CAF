import React, { useState, useEffect } from 'react'
import { SingleView } from '../../layouts/SingleView'
import { getReports } from '../../services/api'
import { Table } from '../../components/atomos/Table'
import { Row } from './Row'
import { useAuth } from '../../contexts/auth.context'
import { useMessage } from '../../contexts/message.context'
import { logoMenuCaf } from '../../common/images'
import { useTranslation } from 'react-i18next'

const ListReportsPage = ({ ...props }) => {
  const { t } = useTranslation();
  const [reports, setReports] = useState([])
  const { onLogout } = useAuth()
  const { onSignal, onMessageSuccess, onMessageFailed } = useMessage()
  useEffect(() => {
    getReportsFilter()
  }, [])
  const getReportsFilter = () => {
    onSignal()
    getReports()
      .then(data => {
        setReports(data.body)
        onMessageSuccess()
      })
      .catch(error => {
        onLogout()
        onMessageFailed(t('reports.error'))
      })
  }
  return (
  <SingleView icon={<img src={logoMenuCaf} alt="" width="150px"/>} title="Lista de relatórios" 
      contentComponent={
        <div>
          <Table
            columns={[
              { displayName: t('reports.report_table')},
              { displayName: t('reports.executions')}
            ]}
          >
            <tbody>
              {reports.map(report => {
                return (
                  <Row
                    key={report.id}
                    {...report}
                  />
                )
              })}
            </tbody>
          </Table>   
        </div>
      }
    />

  )
}

export { ListReportsPage }
    