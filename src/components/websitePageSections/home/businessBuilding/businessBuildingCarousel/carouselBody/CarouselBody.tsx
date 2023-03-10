import React from 'react'
import { Card } from '../../../../../ui/styles'
import CarouselLeftDiv from './CarouselLeftDiv'
import CarouselRightDiv from './CarouselRightDiv'

const CarouselBody = () => {
  return (
    <Card flex gap='85px' smflexdirection='column' smwidth='100%'>
        <CarouselLeftDiv />
        <CarouselRightDiv />
    </Card>
  )
}

export default CarouselBody