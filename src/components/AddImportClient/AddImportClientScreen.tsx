import { useStyles } from 'hooks/useStyles'
import React, { useMemo, useState } from 'react'
import { FlatList, View } from 'react-native'
import { Contact } from 'react-native-contacts'

import stylesConfig from './AddImportClientScreen.styles'
import ContactItem from './components/ContactItem'

interface IProps {
  route: {
    params?: {}
  }
}

export const AddImportClientScreen = ({ route }: IProps) => {
  const {} = route.params || {}
  const styles = useStyles(stylesConfig)

  const [contactsData, setContactsData] = useState<Contact[]>([])
  const [activeContacts, setActiveContacts] = useState<Contact[]>([])

  const [activeSearchValue, setActiveSearchValue] = useState('')
  const newData = useMemo(
    () =>
      contactsData.filter(
        i =>
          i.givenName.toLowerCase().includes(activeSearchValue.toLowerCase()) ||
          i.familyName
            .toLowerCase()
            .includes(activeSearchValue.toLocaleLowerCase()),
      ),
    [contactsData, activeSearchValue],
  )

  // useEffect(() => {
  //   getContacts()
  // }, [])

  return (
    <View style={styles.content}>
      <FlatList
        data={newData}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={() => <Space height={24} />}
        // ItemSeparatorComponent={() => <Space height={20} />}
        // ListFooterComponent={() => (
        //   <Space height={activeContacts.length > 0 ? 120 : 20} />
        // )}
        renderItem={({ item }) => (
          <ContactItem
            activeContacts={activeContacts}
            setActiveContacts={setActiveContacts}
            contact={item}
          />
        )}
      />
    </View>
  )
}
