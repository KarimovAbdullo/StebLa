import { useStyles } from 'hooks/useStyles'
import React, { useMemo } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Contact } from 'react-native-contacts'
import R from 'res'

import stylesConfig from './ContactItem.styles'

interface IProps {
  contact: Contact
  activeContacts: Contact[]
  setActiveContacts: (data: Contact[]) => void
}

export const ContactItem = (props: IProps) => {
  const { contact, activeContacts, setActiveContacts } = props
  useStyles(stylesConfig)

  const activeItem = useMemo(
    () => activeContacts.find(i => i.recordID === contact.recordID),
    [activeContacts, contact],
  )

  const onChange = () => {
    if (activeItem) {
      setActiveContacts(
        activeContacts.filter(i => i.recordID !== contact.recordID),
      )
      return
    }
    setActiveContacts([...activeContacts, contact])
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onChange}>
      <Container cleanExtraSpace>
        <Columns align="center">
          <Columns align="center">
            {activeItem ? <R.icons.PensilIcon /> : <R.icons.PensilIcon />}
            <Space width={16} />
            <Avatar size={42} url={contact.thumbnailPath} />
            <Space width={10} />
          </Columns>

          <View>
            <Typo.Body type="regular18">
              {displayName(contact.givenName, contact.familyName)}
            </Typo.Body>
            <Space height={4} />
            <Typo.Body color="grey" type="regular12">
              {contact.phoneNumbers[0].number}
            </Typo.Body>
          </View>
        </Columns>
      </Container>
    </TouchableOpacity>
  )
}
