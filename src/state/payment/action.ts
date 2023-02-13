import { createAsyncThunk } from '@reduxjs/toolkit'
import apiClient from 'api/instance'
import R from 'res'
// import { IPayment, IReadNotification } from 'types/data'

export const postPayment = createAsyncThunk<
  {},
  {
    price: number
    userId: string
    onSucces?: (response: {}) => void
    onError?: () => void
  }
>('payment/post', async arg => {
  try {
    const { data: response } = await apiClient.post<{}>(
      R.consts.API_PATH_PAYMENT,
      {
        amount: { value: arg.price, currency: 'RUB' },
        metadata: { user_id: arg.userId },
      },
    )
    arg.onSucces?.(response)
    return response
  } catch (e) {
    arg.onError?.()
    throw e
  }
})

// if (response) {
//   return response
// }
// } catch (e) {
// return null
// }
