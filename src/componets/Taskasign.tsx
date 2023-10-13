import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'; // Import IconButton from Material-UI
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsAppIcon from Material-UI
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'; // Import FacebookIcon from Material-UI
import React, { useRef } from "react"

const Taskasign = () => {
    return (
        <div>
            <Typography variant="h5" component="h2" sx={{
                fontSize: 20,
                color: "#fff"
            }}> <br />
                Task Assigned
            </Typography>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                }}
            >
                {/* Box 1 */}

                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white', // Set text color to white
                        marginTop: "50px"
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#25d366' }}>
                                <WhatsAppIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    {/* Social icons at the end */}
                </div>
                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginTop: "50px",
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white', // Set text color to white
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#c32aa3' }}>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    {/* Social icons at the end */}
                </div>
                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white', // Set text color to white
                        marginTop: "50px",
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#1877f2' }}>
                                <FacebookIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    {/* Social icons at the end */}
                </div>
                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white',
                        marginTop: "50px",// Set text color to white
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#25d366' }}>
                                <WhatsAppIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>

                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                }}
            >
                {/* Box 1 */}
                {/* <Slider ref={sliderRef} {...settings}> */}
                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white', // Set text color to white
                        marginTop: "50px"
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#25d366' }}>
                                <WhatsAppIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    {/* Social icons at the end */}
                </div>
                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginTop: "50px",
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white', // Set text color to white
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#c32aa3' }}>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    {/* Social icons at the end */}
                </div>
                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white', // Set text color to white
                        marginTop: "50px",
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#1877f2' }}>
                                <FacebookIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    {/* Social icons at the end */}
                </div>
                <div
                    style={{
                        flex: '0 0 auto',
                        width: '25%',
                        padding: '16px',
                        boxSizing: 'border-box',
                        maxHeight: '400px', // Set the maximum height for the box
                        backgroundColor: '#303030',
                        borderRadius: '20px',
                        marginRight: '8px', // Add spacing between boxes
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the contents horizontally
                        color: 'white',
                        marginTop: "50px",// Set text color to white
                    }}
                >
                    {/* Avatar and Social icons in the same row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Avatar centered */}
                        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt="Remy Sharp" src="avatar1.png" />
                            {/* Name of the sender centered */}
                            <div style={{ marginTop: '8px', textAlign: 'center', fontSize: "20px", fontWeight: "400" }}>John Doe</div>
                        </div>
                        {/* Social icons */}
                        <div>
                            <IconButton style={{ color: '#25d366' }}>
                                <WhatsAppIcon />
                            </IconButton>
                        </div>
                    </div>
                    {/* Text */}
                    <div>
                        <p style={{ margin: 0, textAlign: "center", fontSize: "18px", fontWeight: "300" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Taskasign