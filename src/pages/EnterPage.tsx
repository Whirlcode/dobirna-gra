import Box from '@mui/joy/Box';
import Tab from '@mui/joy/Tab'
import Tabs from '@mui/joy/Tabs'
import TabList from '@mui/joy/TabList'
import Card from '@mui/joy/Card'
import Input from '@mui/joy/Input'
import Button from '@mui/joy/Button'

import KeyIcon from '@mui/icons-material/Key';

import FloatingInput from '@app/components/FloatingInput'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

enum ETabs {
    EnterLobby,
    CreateLobby,
    FindLobby
}

type TabsPanelProps = {
    tab: ETabs
    onChangeTab: (newTab: ETabs) => void
}

type TabsContentProps = {
    tab: ETabs
}

function TabsPanel(props: TabsPanelProps) {
    return (
        <Tabs
            aria-label="tabs"
            value={props.tab}
            onChange={(_, v) => { props.onChangeTab(v as ETabs) }}
            sx={{
                bgcolor: 'transparent',
            }}>
            <TabList
                disableUnderline
                sx={th => ({
                    p: 0.5,
                    gap: 0.5,
                    borderRadius: 'xl',
                    bgcolor: th.vars.palette.background.level1
                })}>
                <Tab disableIndicator value={ETabs.EnterLobby}>Enter lobby</Tab>
                <Tab disableIndicator value={ETabs.CreateLobby}>Create lobby</Tab>
                <Tab disableIndicator value={ETabs.FindLobby}>Find lobby</Tab>
            </TabList>
        </Tabs>
    );
}

function TabContent(props: TabsContentProps) {
    const navigate = useNavigate();
    return (<>
        { props.tab == ETabs.EnterLobby &&
        <Card size="lg" sx={{ marginTop: 1 }}>
            <FloatingInput label='Name' placeholder='John Doe' />
            <Input startDecorator={<KeyIcon />} endDecorator={<Button onClick={() => { navigate('/game') }}>Enter</Button>} placeholder='Invite code'></Input>
        </Card> }
    </>)
}

export default function EnterPage() {
    const [currentTab, setTab] = useState(ETabs.EnterLobby);
    return (<>
        <Box sx={{
            display: 'flex',
            width: '100%',
            py: 20,
            borderRadius: 'xs',
        }}>
            <Box sx={{
                alignSelf: 'center',
                mx: 'auto',
                py: 3,
            }}>
                <TabsPanel tab={currentTab} onChangeTab={(value) => { setTab(value) }} />
                <TabContent tab={currentTab}/>
            </Box>
        </Box>
    </>)
}