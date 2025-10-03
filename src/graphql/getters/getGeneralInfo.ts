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

    return {
      data: data?.general ?? null,
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    return { data: null }
  }
}
