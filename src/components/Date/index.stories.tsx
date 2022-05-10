import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import RangeDatePicker from './RangeDatePicker'

export default {
  title: 'Components/Date',
  component: RangeDatePicker,
  argTypes: {},
} as Meta

export function Default() {
  return <RangeDatePicker />
}
