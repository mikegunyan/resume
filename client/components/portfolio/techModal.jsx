import * as React from 'react';
import Tech from './tech';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FolderIcon from '@mui/icons-material/Folder';

const actions = [
  { icon: <ExitToAppIcon />, name: 'Exit' },
  { icon: <FolderIcon />, name: 'Higher Order Components' },
  { icon: <FolderIcon />, name: 'Database Management' },
  { icon: <FolderIcon />, name: 'Checkers' },
  { icon: <FolderIcon />, name: 'Pyramid Descent Puzzle' },
];

const TechModal = ({ tech, setTech }) => {
  if (tech === '') {
    return null;
  }
  return (
    <div className="techModal">
      <div className="techChanger">
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<TouchAppIcon />}
            direction="down"
          >
            {actions.map((action) => (
              <SpeedDialAction
                onClick={action.name === 'Exit' ? () => setTech('') : () => setTech(action.name)}
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
      <Tech tech={tech} />
    </div>
  );
};

export default TechModal;
