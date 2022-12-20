import React from 'react'
import styled from 'styled-components'
import NavigationComponent from 'components/navigationComponents/NavigationComponent'
import OrderDashboard from 'components/coursesDashboard/OrderDashboard'
import FooterComponent from 'components/footerComponents/FooterComponent'

const OrderWrapper = styled.div`

`

function AllOrders() {
  return (
    <OrderWrapper>
        <NavigationComponent/>
        <OrderDashboard/>
        <FooterComponent/>
    </OrderWrapper>
  )
}

export default AllOrders