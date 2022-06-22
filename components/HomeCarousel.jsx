import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                
            >
                {typeof(Window) !== undefined  && thumbnails.map((step, index) => (
                    <div key={step}>
                        {Math.abs(activeStep - index) <= 1  ? (
                            <Box
                                component="img"
                                sx={{
                                    height: 255,
                                    display: 'flex',
                                    marginX: 'auto',
                                    maxWidth: 400,
                                    overflow: 'hidden',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',

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