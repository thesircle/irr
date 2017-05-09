import T from '../constants/types'

export function updateKaseya(url, companyId, userName, password) {
  console.log(`iam in updateKaseya action`)
  console.log(`console: ${url} ${companyId} ${userName} ${password}`)
  return {
    type: T.INTEGRATIONS.KASEYA.CREATE,
    payload: {url, companyId, userName, password}
  }
}