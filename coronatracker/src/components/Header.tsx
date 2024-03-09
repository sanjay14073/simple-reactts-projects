import React, { useEffect, useState } from "react";
import { Grid, Container, Box, Typography, Card, CardContent, Divider, Button } from "@mui/material";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PieChart } from '@mui/x-charts';
import { Event } from "@mui/icons-material";
const Header: React.FC = () => {
    // Replace these placeholders with actual data
    const [totalCases, setTotalCases] = useState("0");
    const [activeCases, setActiveCases] = useState("0");
    const [totalRecovered, setTotalRecovered] = useState("0");
    const [totalDeaths, setTotalDeaths] = useState("0");
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        // Fetch data based on the selected date
        if (selectedDate) {
            // Implement your data fetching logic here
            // Example: fetchData(selectedDate);
            setActiveCases("0");
            setTotalCases("0");
            setTotalRecovered("0");
            setTotalDeaths("0");
        }
    }, [selectedDate]);

    return (
        <>
            <ToastContainer/>
            <Container sx={{ alignItems: 'center', marginBlockStart: '30px' }}>
                <Box textAlign="center" mt={3}>
                    <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: '2rem' }}>
                        Welcome to Corona Tracker
                    </Typography>
                    <Typography variant="h4" component="h4" color="textSecondary" sx={{ fontSize: '1.5rem' }}>
                        Track The Cases with Dates
                    </Typography>
                </Box>
            </Container>
            <Divider sx={{ height: '20px' }}></Divider>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
            <div style={{ marginBottom: '16px' }}>
                <Typography variant="subtitle1" gutterBottom>
                    <Box display="flex" alignItems="center">
                    <Event sx={{ marginRight: '8px' }} /> {/* Date icon */}
                    Select the Date
                    </Box>
                </Typography>
                <DatePicker
                    startDate={new Date('2020-01-01')}
                    selected={selectedDate}
                    onChange={(date: Date) => handleDateChange(date)}
                    dateFormat="yyyy/MM/dd"
                    endDate={new Date()}
                    className="form-control" // Adjust as needed
                />
                </div>
                
                <Box sx={{ height: '20px', padding: '5px' }}></Box>
                <Button
                    onClick={async() => {
                        // Fetch data based on the selected date
                        // Example: fetchData(selectedDate);
                       // let currdate=new Date()
                       let datestring = selectedDate?.toLocaleDateString('en-CA');
                        console.log(datestring);

                        try {
                        const response = await fetch(`https://covid-api.com/api/reports/total?date=${datestring}`);

                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const responseData = await response.json();
                        const data = responseData.data;

                        //console.log(data.active, data.confirmed, data.recovered,data.deaths);

                        setActiveCases(data.active);
                        setTotalCases(data.confirmed);
                        setTotalRecovered(data.recovered);
                        setTotalDeaths(data.deaths);
                        if(data.active===undefined||!data.confirmed===undefined||!data.recovered===undefined||data.deaths===undefined){

                            toast.error("Error in Fetching data")
                            setActiveCases("0");
                            setTotalCases("0");
                            setTotalRecovered("0");
                            setTotalDeaths("0");

                        }else{
                            toast.success("Data of you choosen Date fetched")
                        }

                        } catch (error) {
                        //console.log('Error fetching data:', error);
                        toast.error("Date out of range / Internal error");
                        }

                    }}
                    sx={{ backgroundColor: '#2196F3', color: 'white' }}
                    variant="contained"
                >
                    Get Information
                </Button>
            </Container>

            <Grid container spacing={3} justifyContent="center" sx={{ padding: '20px' }}>
                {[{ label: 'Total Cases', value: totalCases }, { label: 'Active Cases', value: activeCases }, { label: 'Total Recovered', value: totalRecovered },{label:'Total Deaths',value:totalDeaths}].map((item, index) => (
                    <Grid item key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.label}
                                </Typography>
                                <Typography variant="h4" component="div">
                                    {item.value}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-150px' }}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: Number(activeCases), label: 'Active' },
                                { id: 1, value: Number(totalRecovered), label: 'Recovered' },
                                { id: 2, value: Number(totalDeaths), label: 'Deaths' },
                            ],
                            innerRadius: 50,
                            outerRadius: 100,
                        },
                    ]}
                    width={600}
                    height={600}
                />
            </div>

            
        </>
    );
}

export default Header;


