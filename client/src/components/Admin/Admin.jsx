import React from 'react'
import ProfileProgress from "./ProfileProgress";
import InterviewScheduleCard from "./InterviewScheduleCard";
import ApplyCard from "./ApplyCard";
import AddIncentives from "./AddIncentives";
import PushNotifications from "./PushNotif";
import AddEvents from "./AddEvents";
import Mint from "./Mintnft";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import TimeLine from "./Timeline";
import TabPanel from "./TasksSection";
import NoOfApp from "./NoOfApp";

const useStyles = makeStyles((theme) => ({
	flexItem: {
		display: "flex",
		height: "100%",
		backgroundColor: "#F2F3F7",
        marginTop:"10vh",
		justifyContent: "space-around",
		[theme.breakpoints.down("md")]: {
			marginLeft: "30px!important",
		},
	},
}));

const Admin = () => {
    const classes = useStyles();
  return (
            <>
            <Grid container columnSpacing={4} className={classes.flexItem} sx={{marginTop:"10vh"}}>
                        <Grid item md={4} xs={12} lg={4}>
                        <Grid item xs={10} lg={12} md={12} mt={3} ml={7} mb={2}>
                            <ProfileProgress />
                        </Grid>
                        <Grid item xs={10} lg={12} md={12} mt={3} sx={{marginLeft:"4vw"}}>
                            <ApplyCard />
                        </Grid>
                        <Grid item xs={10} lg={12} md={12} mt={3} sx={{marginLeft:"4vw"}}>
                            <PushNotifications />
                        </Grid>
                        {/* <Grid item xs={10} lg={12} md={12} mt={5} ml={7} >
                            <InterviewScheduleCard />
                        </Grid> */}
                        </Grid>
                        <Grid item md={4} xs={12}>
                        <Grid item xs={10} md={12} mt={3} lg={12} >
                            <TimeLine />
                        </Grid>
                        </Grid>
                        <Grid item md={4} xs={12} lg={4}>
                        <Grid item xs={10} lg={12} md={12} mt={3}>
                            <Mint />
                        </Grid>
                        <Grid item xs={10} lg={12} md={12} mt={3}>
                            <AddEvents/>
                        </Grid>
                        <Grid item xs={10} lg={12} md={12} mt={3} >
                            <AddIncentives/>
                        </Grid>
                        {/* <Grid item xs={10} lg={12} md={12} mt={7}>
                            <NoOfApp />
                        </Grid> */}
                        </Grid>

                        <Grid item md={11} xs={10} lg={11}>
                        <Grid item md={12} xs={10} mt={3} lg={12} mb={5}>
                            <TabPanel />
                        </Grid>
                        </Grid>
                    </Grid>
            </>
        


  )
}

export default Admin
