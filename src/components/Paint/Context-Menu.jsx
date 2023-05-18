import React, { useEffect, useState } from "react";
import { Menu, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Stack, Button, ButtonGroup} from '@mui/material';
import Layers from "./PaintToolbar/Layers";
import Grouping from "./PaintToolbar/Grouping";

const ContextMenu = (props) => {
  const { canvas } = props;
  
  const [contextMenu, setContextMenu] = React.useState(null);

  const _handleContextMenu = (event) => {
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : 
          null,
    );
  };

  const _handleClose = () => {
    setContextMenu(null);
  };
  
    useEffect(() => {
        addEventListener("contextmenu", (event) => {
            event.preventDefault();
            _handleContextMenu(event);       
        });
    });

  return (
      <Menu
        open={contextMenu !== null}
        onClose={_handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <Stack sx={{pt: 2}} spacing={2}>
            <ButtonGroup variant="text" fullWidth={true}  >
                <Layers canvas={ canvas } />
            </ButtonGroup>
            <ButtonGroup variant="text" fullWidth={true} sx={{mb: 2}} >
                <Grouping canvas={ canvas } />
            </ButtonGroup>      
            <TableContainer >
                <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                <TableHead>
                        <TableRow>
                                <TableCell colSpan={2}>The following keyboard shortcuts are available</TableCell>
                            </TableRow>
                    </TableHead>
                    <TableHead>
                        <TableRow>
                                <TableCell>Command</TableCell>
                                <TableCell>Shortcut</TableCell>
                            </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Cut</TableCell>
                            <TableCell>Cmd/Ctl + X</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Copy</TableCell>
                            <TableCell>Cmd/Ctl + C</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Paste</TableCell>
                            <TableCell>Cmd/Ctl + V</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Delete Object</TableCell>
                            <TableCell>Backspace / Delete</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Undo</TableCell>
                            <TableCell>Cmd/Ctl + Z</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Redo</TableCell>
                            <TableCell>Cmd/Ctl + Y</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Holding Shift whilst manipulating shapes allows axis tilt</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
      </Menu>
  );
}

export default ContextMenu;