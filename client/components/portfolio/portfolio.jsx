import React, { useState } from 'react';
import TechModal from './techModal';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Higher Order Components',
    imgPath:
      'https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/higherOrderComponents.png',
  },
  {
    label: 'Database Management',
    imgPath:
      'https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/databaseManagement.png',
  },
  {
    label: 'Checkers',
    imgPath:
      'https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/checkers.png',
  },
  {
    label: 'Pyramid Descent Puzzle',
    imgPath:
      'https://michaelgunyanresume.s3.us-west-2.amazonaws.com/images/pyramidDescentPuzzle.png',
  },
];

function Portfolio({ theme, visitors }) {
  const style = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [tech, setTech] = useState('');
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={theme}>
      <h1>Portfolio</h1>
      <TechModal tech={tech} setTech={setTech} visitors={visitors} />
      <Box sx={{ width: '100%', flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'rgb(214, 214, 214)',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={style.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  className="box"
                  onClick={() => setTech(step.label)}
                  component="img"
                  sx={{
                    height: '100%',
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                    bgcolor: 'rgb(214, 214, 214)',
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{
            bgcolor: 'rgb(214, 214, 214)',
          }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {style.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {style.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default Portfolio;
