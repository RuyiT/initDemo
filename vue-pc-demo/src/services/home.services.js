import ajax from '../utils/fetch'
import api from '@/api/home.conf'

export const getUserInfo = userId =>
  ajax.get(api.home.getUserInfo, { userId, showLoading: true })

export const addList = params =>
  ajax.post(api.home.addList, params, { showLoading: true })
