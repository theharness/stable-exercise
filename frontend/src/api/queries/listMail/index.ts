import query from './graphql'
import apiInstance from '../../index'
import { print } from 'graphql'
import MailItem from '../../../types/MailItem'
import {AxiosResponse} from 'axios'

type ListMailResponse = { data: { listMail: MailItem[] }}

const listMail = async (): Promise<AxiosResponse<ListMailResponse>> => apiInstance.post<ListMailResponse>(
  '',
  {
    operationName: 'listMail',
    query: print(query),
    variables: {}
  }
)

export default listMail