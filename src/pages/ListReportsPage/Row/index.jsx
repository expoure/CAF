import React from 'react'
import { useTranslation } from 'react-i18next';

import { CustomLink } from './styles'

const Row = (data) => {
  const { t } = useTranslation();
  return (
    <tr>
      <td heading={'Nome'}>{data.name}</td>
      <td heading={t('reports.executions')}>
        <CustomLink
          to={{
            pathname: `/reports/${data._id}/executions`,
            state: {
              reportName: data.name
            }
          }}
        >
          {t('reports.report_action')}
        </CustomLink>
      </td>
    </tr>
  )
}

export { Row }
