import { api } from '../../axios'

async function getExecutions(reportId, status) {
  try {
    // Retorna apenas 20 execuções
    return (await api.get(`/reports/${reportId}/executions`,
     {
        params: {
          ...status
        }
      }))
      .data
  } catch (error) {
    throw new Error(error)
  }
}

export { getExecutions }