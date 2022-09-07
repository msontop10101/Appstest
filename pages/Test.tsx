import React from 'react'
import DashDrawer from '../components/Dashboard/DashboardDrawer/DashboardDrawer'
import TestContent from '../components/Tests/TestContent/TestContent'

const TestComp = () => {
  return (
    <div>
        <DashDrawer>
            <TestContent/>
        </DashDrawer>
    </div>
  )
}

export default TestComp