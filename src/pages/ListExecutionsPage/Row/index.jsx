import React from 'react'
import { useTranslation } from 'react-i18next';

const Row = (data) => {
  const { t } = useTranslation();
  return (
    <tr>
      <td heading={t('executions.type')}>{data.type !== '' ? data.type : '-'}</td>
      <td heading={t('executions.status')}>{data.status !== '' ? data.status : '-'}</td>
      <td heading={t('executions.name')}>{data.data.name ? data.data.name : '-'}</td>
    </tr>
  )
}

export { Row }
