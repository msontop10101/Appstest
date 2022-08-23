import React from 'react'
import DashDrawer from "../DashDrawer/DashDrawer"
import DashContent from '../DashContent/DashContent'

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