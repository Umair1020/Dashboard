import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function PinnedChatCards(props: any, { chatData }: any) {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            bottom: "0px !important",
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));
    const StyledBadge2 = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: 'rgba(255, 221, 85, 1)',
            bottom: "0px !important",
            color: 'rgba(255, 221, 85, 1)',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '1px solid currentColor',
                content: '""',
            },
        },
    }));
    const StyledBadge3 = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: ' rgba(197, 34, 31, 1)',
            bottom: "0px !important",
            color: 'rgba(255, 221, 85, 1)',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '1px solid currentColor',
                content: '""',
            },
        },
    }));
   
    return (
        <>
            <div style={{ minWidth: "260px", maxWidth: "250px", height: "290px" }}>
                <Box
                    sx={{
                        width: "100%",
                        height: 280,
                        // backgroundColor: "primary.light",
                        // marginLeft: "-40px",
                        borderRadius: "0.4rem",
                        boxShadow: 1,
                        background: "#383838",
                        py: 0.5,
                        ":hover": {
                            borderRadius: "16px",
                            
                            borderColor: "primary.light",
                        },
                    }}
                    maxHeight={280}
                    overflow={"clip"}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            p: 1,
                            m: 1,

                            borderRadius: 1,
                        }}
                    >
                        <Box sx={{ color: "#007EF2" }}>{props.mainIcon}</Box>{" "}
                        <Typography
                            variant="h5"
                            fontSize={20}
                            fontWeight={500}
                          
                            lineHeight={1.5}
                            fontStyle={"medium"}
                            textAlign={"center"}
                            component="h2"
                            color= "#fff"
                        >
                            User Activity
                        </Typography>
                        <button
                                style={{
                                    background: " linear-gradient(89.52deg, rgba(255, 255, 255, 0.81) -133.41%, #69008D -26.83%, #A339E9 105.22%)",
                                    borderRadius: "11.47px",
                                    color: "#fff",
                                    display: 'flex',
                                    alignItems: 'end',
                                    margin: "auto",
                                    padding: "8.45px",
                                    justifyContent: "center" ,
                                    border: "none",
                                }}

                            >
                                See More
                            </button>
                    </Box>

                    <List
                        sx={{ width: "100%", maxWidth: 360, marginLeft: "20px" }}
                    >

                        <Stack direction="row" spacing={4}>
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src="/Ellipse.png" />
                            </StyledBadge>
                            <p style={{
                                color: "#fff",
                                marginTop: "10px", fontFamily: "Poppins"}}>Online</p>
                        </Stack>
                        <br />
                        <Stack direction="row" spacing={4}>
                            <StyledBadge2
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src="/Ellipse2.png" />
                            </StyledBadge2>
                            <p style={{
                                color: "#fff",
                                marginTop: "10px", fontFamily:  "Poppins" , }}>Away</p>
                        </Stack> <br />
                        <Stack direction="row" spacing={4}>
                            <StyledBadge3
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src="/Ellipse3.png" />
                            </StyledBadge3>
                            <p style={{
                                color: "#fff",
                                marginTop: "10px", fontFamily:
                                    "Poppins"
                            }}>Offline - 8 mins ago</p>
                        </Stack>



                        {/* {chatData !== undefined ? (
                            chatData.map((e: any) => <PinnedChatUsers />)
                        ) : (
                            <Typography>No Active Users</Typography>
                        )} */}
                    </List>
                </Box>
            </div>
        </>
    );
}
