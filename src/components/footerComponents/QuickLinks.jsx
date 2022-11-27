import React from 'react'
import { Typography } from 'components/Typography'



function QuickLinks({item, itemHeading}) {
  return (
    <div>
        <Typography variant="footerHeading">{itemHeading}</Typography>
        <Typography variant="footerSmall">{item}</Typography>
    </div>
  )
}

export default QuickLinks