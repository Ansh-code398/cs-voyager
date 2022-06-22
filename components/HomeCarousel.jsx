import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Image from 'next/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);



function SwipeableTextMobileStepper({ thumbnails }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'black',
                }}
            >
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={1}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                
            >
                {thumbnails.map((step, index) => (
                    <div key={step} className="coursel">
                        {Math.abs(activeStep - index) <= 1  ? (
                            <Image
                                height= {255}
                                width= "100%"
                                style={{
                                    display: 'flex',
                                    marginX: 'auto',
                                    minWidth: "100%",
                                    width: "100%",
                                    height: "auto",
                                    overflow: 'hidden',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    objectFit: "cover"
                                }}
                                src={step}
                                alt={step}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    );
}

export default SwipeableTextMobileStepper;