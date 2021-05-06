import ajax from '../utils/fetch'
import api from '@/api/home.conf'

export const getUserInfo = userId =>
  ajax.get(api.getUserInfo, { userId, showLoading: true })

export const addList = params =>
  ajax.post(api.addList, params, { showLoading: true })

export const getTableData = id =>
  ajax.get(api.getTableData, { id, showLoading: true })

export const getBlogDetail = id =>
  ajax.get(api.getBlogData, { id, showLoading: true })
