import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { PinnedChats, getRecentChats } from "../features/get_messagesSlice";
import { useEffect, useState } from "react";
import Inquire from "../componets/Dashboard/Inquire";

const Dashboard = () => {
  const [recentChats, setRecentChats] = useState([]);
  const [pinnedChats, setPinnedChats] = useState([]);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    getRecentChat();
    getPinChat();
  }, []);

  const getRecentChat = async () => {
    await dispatch(getRecentChats({})).then((onResolved: any) => {
      if (onResolved.payload !== "error") {
        setRecentChats(onResolved.payload);
        // console.log(recentChats);
      }
    });
  };
  const getPinChat = async () => {
    await dispatch(PinnedChats({})).then((onResolved: any) => {
      if (onResolved.payload !== "error") {
        setPinnedChats(onResolved.payload);
        console.log('hello', onResolved.payload);
      }
    });
  };


  return (
    <>
       <br />
      <Typography variant="h6" component="h6" color="textPrimary">
        Dashboard
      </Typography>
      {/* <Box>
          </Box> */}
      <Box
        display={"flex"}
        // alignItems={"center"}
        justifyContent={"flex-start"}
        gap={"20px"}
        py={"20px"}
      >
        <Inquire />

      </Box>
    </>
  );
};

export default Dashboard;
