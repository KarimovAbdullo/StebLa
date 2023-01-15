import { useField, useFormikContext } from 'formik'
import { useStyles } from 'hooks/useStyles'
import React, { useCallback, useRef, useState } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import MaskInput from 'react-native-mask-input'

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
          <MaskInput
            placeholder={placeholder}
            value={String(field.value)}
            ref={ref}
            keyboardType={keyboardType}
            onFocus={onFocus}
            onBlur={onBlur}
            autoCapitalize={autoCapitalize}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            {...attributes}
            style={[
              styles.input,
              // ref?.current?.isFocused() ? styles.activeInput : {},
              inputStyle,
            ]}
            onChangeText={(masked, unmasked) => {
              onChangeText(masked) // you can use the unmasked value as well

              // assuming you typed "12" all the way:
              console.log(masked) // (99) 99999-9999
              console.log(unmasked) // 99999999999
            }}
            mask={[
              '+',
              '7',
              '(',
              /\d/,
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
        </View>
      </View>
    </View>
  )
}
