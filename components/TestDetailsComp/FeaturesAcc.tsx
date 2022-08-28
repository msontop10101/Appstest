import React from 'react'
import { testFeatures } from '../../files/data'
import {Box} from "@mui/material"
import Features from './Features'

const FeaturesAcc = () => {
  return (
    <>
        {
            testFeatures.map((feature, index) => {
                const { title, location, whatToTest, expected } = feature;
                return (
                    <Box key={index}>
                        <Features title={title} location={location} whatTotest={whatToTest} expected={expected}/>
                    </Box>
                )
            })
        }
    </>
  )
}

export default FeaturesAcc