import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import React, { useState } from 'react'
import styles from "./styles.module.scss"
function CustomTab({ type = "lg",view,tabList }) {
    const [tabIndex, setTabIndex] = useState(0)
    const styling = {
        fontWeight: {
            lg: "500",
            md: "500"
        },
        fontSize: {
            lg: "1.4rem",
            md: "1rem"
        },
        color: {
            lg: "highlighter.100",
            md: "highlighter.100"
        },
        borderColor:{
            lg: "purple",
            md: "purple"
        }
    }
    return (
        <Tabs onChange={(index)=>setTabIndex(index)} className={styles.tabs} isLazy >
            <TabList className={styles.tabPanel}>
                {
                    tabList?.map((item, key) => (
                        <Tab
                            key={key}
                            fontWeight={styling.fontWeight[type]}
                            fontSize={styling.fontSize[type]}
                            color={key===tabIndex?"primary.100":styling.color[type]}
                        >{item}</Tab>
                    ))
                }
            </TabList>

            <TabPanels >
                {view.map((item,key)=>(
                    <TabPanel key={key}>
                        {item}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}

export default CustomTab
