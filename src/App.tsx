import { useEffect, useState } from 'react'

import classNames from 'classnames/bind'
import styles from './App.module.scss'

import FullScreenMessage from '@shared/FullScreenMessage'

import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import ImageGallery from '@components/sections/ImageGallery'

import type { Wedding } from '@models/wedding'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) throw new Error('정보를 불러오지 못했습니다.')
        return res.json()
      })
      .then((data) => setWedding(data))
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <FullScreenMessage type="loading" />
  if (error) return <FullScreenMessage type="error" />

  if (wedding == null) return null
  const { date, galleryImages } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <ImageGallery images={galleryImages} />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
