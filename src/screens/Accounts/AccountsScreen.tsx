import ButtonInline from 'components/ButtonInline'
import FocusAwareStatusBar from 'components/common/CustomStatusBar/CustomStatusBar'
import TelegramItem from 'components/TelegramItem'
import Typo from 'components/typo'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import useSmartNavigation from 'hooks/useSmartNavigation'
import { useStyles } from 'hooks/useStyles'
import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native'
import R from 'res'
import {
  getAccountsAction,
  getMoreAccountsAction,
} from 'state/accounts/actions'
import { getAccounts } from 'state/accounts/selectors'
import { lang } from 'utils/lang'

import stylesConfig from './AccountsScreen.styles'

const T = R.lang.screen_acounts

export const AccountsScreen = () => {
  const styles = useStyles(stylesConfig)
  const navigate = useSmartNavigation()
  const dispatch = useAppDispatch()
  const { accounts, loading, offset, moreLoading } = useAppSelector(getAccounts)

  const [activeButton, setActiveButton] = React.useState(false)
  const [activeList, setActiveList] = useState<string[]>([])

  useEffect(() => {
    dispatch(getAccountsAction())
  }, [])

  const infinitScroll = () => {
    dispatch(getMoreAccountsAction({ offset }))
  }

  const back = () => {
    navigate.goBack()
  }

  const onRefresh = () => {
    dispatch(getAccountsAction())
  }

  const activeButtons = () => {
    setActiveButton(false)
    setTimeout(() => {
      setActiveButton(true)
    }, 800)
    navigate.navigate(R.routes.SCREEN_ADD_TELEGRAM_NUM)
  }

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar backgroundColor={R.colors.white} />

      <View style={styles.iconContent}>
        <TouchableOpacity onPress={back}>
          <R.icons.BackIcon />
        </TouchableOpacity>

        <Typo.Title type="regular18bold">{lang(`${T}.label`)}</Typo.Title>

        <R.icons.PlusCardIcon />
      </View>

      <FlatList
        data={accounts}
        ListHeaderComponentStyle={styles.headerList}
        onEndReached={infinitScroll}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          <Typo.Title center type="regular016" color="iconPrimary">
            {lang(`${T}.title`)}
          </Typo.Title>
        }
        ListFooterComponentStyle={styles.buttonContainer}
        ListFooterComponent={
          moreLoading ? (
            <ButtonInline
              text={lang(`${T}.bottomText`)}
              style={activeButton ? styles.buttonActive : {}}
              onPress={activeButtons}
              icon={<R.icons.PlusCardIcon />}
              loading={loading}
            />
          ) : (
            () => <ActivityIndicator size="large" style={styles.loadingStyle} />
          )
        }
        // keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TelegramItem
            item={item}
            key={item.telegramId}
            activeList={activeList}
            setActiveList={setActiveList}
          />
        )}
      />
    </View>
  )
}
