import { parseISO, format, getDay } from 'date-fns'

import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

const days = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
]

export default function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)

  const title = format(weddingDate, 'yy.MM.dd')
  const subTitle = days[getDay(weddingDate)]

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{title}</div>
      <div className={cx('txt-day')}>{subTitle}</div>
    </Section>
  )
}
