import React from 'react'
import DashDrawer from "../DashboardDrawer/DashboardDrawer"
import DashContent from '../DashboardContent/DashboardContent'

function DrawerComp() {
	return (
		<>
			<div>
				<DashDrawer>
					<DashContent/>
				</DashDrawer>
			</div>
		</>
	)
}

export default DrawerComp