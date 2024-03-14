import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "@app/Store";

import Box from "@mui/joy/Box";
import Tab from "@mui/joy/Tab";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import EnterLobbyTab from "@app/components/entryComponents/EnterLobbyTab";
import CreateLobbyTab from "@app/components/entryComponents/CreateLobbyTab";

enum ETabs {
  EnterLobby,
  CreateLobby,
  FindLobby,
}

type TabsPanelProps = {
  tab: ETabs;
  onChangeTab: (newTab: ETabs) => void;
};

type TabsContentProps = {
  tab: ETabs;
};

function TabsPanel(props: TabsPanelProps) {
  return (
    <Tabs
      aria-label="tabs"
      value={props.tab}
      onChange={(_, v) => {
        props.onChangeTab(v as ETabs);
      }}
      sx={{
        display: "flex",
        bgcolor: "transparent",
        maxWidth: "400px",
        alignSelf: "center",
      }}
    >
      <TabList
        disableUnderline
        sx={(th) => ({
          display: "flex",
          justifyContent: "space-evenly",
          p: 0.5,
          borderRadius: "xl",
          bgcolor: th.vars.palette.background.level1,
        })}
      >
        <Tab disableIndicator value={ETabs.EnterLobby}>
          Enter lobby
        </Tab>
        <Tab disableIndicator value={ETabs.CreateLobby}>
          Create lobby
        </Tab>
        <Tab disableIndicator value={ETabs.FindLobby}>
          Find lobby
        </Tab>
      </TabList>
    </Tabs>
  );
}

function TabContent(props: TabsContentProps) {
  return (
    <>
      {props.tab == ETabs.EnterLobby && <EnterLobbyTab />}
      {props.tab == ETabs.CreateLobby && <CreateLobbyTab />}
    </>
  );
}

export default function EnterPage() {
  const [currentTab, setTab] = useState(ETabs.EnterLobby);
  const isInLobby = useAppSelector(s => s.gameState.lobby?.Id) != null;
  return (
    <>
      {isInLobby && <Navigate to="/game" />}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          position: 'relative',
          top: "50px",
          borderRadius: "xs",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mx: "auto",
          }}
        >
          <TabsPanel
            tab={currentTab}
            onChangeTab={(value) => {
              setTab(value);
            }}
          />
          <TabContent tab={currentTab} />
        </Box>
      </Box>
    </>
  );
}
