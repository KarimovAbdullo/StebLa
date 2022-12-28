import { useField, useFormikContext } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React, { useCallback, useRef, useState } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'

import stylesConfig from './LoginInput.style'
interface IProps extends TextInputProps {
  name: string
  label?: string
  title?: string
  validate?: (value: string) => string | undefined
  inputStyle?: object
  placeholder?: string
  secureTextEntry?: boolean
}

export const LoginInput = ({
  placeholder,
  validate,
  name,
  autoCapitalize,
  inputStyle,
  secureTextEntry,
  placeholderTextColor,
  keyboardType,
  ...attributes
}: IProps) => {
  const [field, meta, helpers] = useField({ name, validate })
  const styles = useStyles(stylesConfig)
  const ref = useRef<TextInput>(null)
  const [leftFocus, setLeftFocus] = useState(false)
  const { submitCount } = useFormikContext()

  const onChangeText = useCallback(async (value: string) => {
    helpers.setValue(value)
  }, [])

  const onFocus = useCallback(() => {
    setLeftFocus(false)
    helpers.setTouched(true)
  }, [])

  const onBlur = useCallback(() => {
    setLeftFocus(true)
  }, [])

  return (
    <View style={[styles.container, meta.error ? styles.eror : {}]}>
      <View style={styles.itemsContent}>
        {(submitCount || leftFocus) && meta.error ? (
          <Text style={styles.errorText}>{meta.error}</Text>
        ) : null}
        <View style={styles.inputContent}>
          <TextInput
            style={[
              styles.input,
              // ref?.current?.isFocused() ? styles.activeInput : {},
              inputStyle,
            ]}
            placeholder={placeholder}
            value={String(field.value)}
            ref={ref}
            keyboardType={keyboardType}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            {...attributes}
          />
        </View>
      </View>
    </View>
  )
}
