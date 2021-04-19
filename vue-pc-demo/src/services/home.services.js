import ajax from '@/utils/fetch'
import api from '@/config/api.conf'

export const getUserInfo = () => ajax.get(api.home.getUserInfo, { showLoading: true })
