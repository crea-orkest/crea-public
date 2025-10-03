import { client } from '../gqlClient'
import {
  GetGeneralInfoDocument,
  type GetGeneralInfoQuery,
  type GetGeneralInfoQueryVariables,
} from '../generated/graphql'

export const getGeneralInfo = async () => {
  try {
    const { data } = await client.query<
      GetGeneralInfoQuery,
      GetGeneralInfoQueryVariables
    >(GetGeneralInfoDocument, {})

    console.log('General info fetched', data)

    return {
      data,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null }
  }
}
