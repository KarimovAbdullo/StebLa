// export const addTelegram = createAsyncThunk<{} | null,{data: ITelegram onSuccess?: (response: {}) => void onError?: () => void  }>('user/signin', async arg => {
//   try {
//     const { data: response } = await apiClient.post<{}>(
//       R.consts.API_PATH_TELEGRAM_INIT,
//       arg.data,
//     )

//     arg.onSuccess?.(response)
//     return response
//   } catch (e) {
//     arg.onError?.()
//     throw e
//   }
// })
