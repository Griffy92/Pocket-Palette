import React, { useEffect, useState } from "react";
import { Menu, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Stack, Button, ButtonGroup} from '@mui/material';
import Layers from './Layers';
import Grouping from "./Grouping";

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
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
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
        <Stack sx={{p: 2}} spacing={2}>
            <ButtonGroup variant="text" fullWidth={true}  >
                <Layers canvas={ canvas } />
            </ButtonGroup>
            <ButtonGroup variant="text" fullWidth={true} sx={{mb: 2}} >
                <Grouping canvas={ canvas } />
            </ButtonGroup>      
            <hr />
            <p>Please use the following keyboard shortcuts</p>
            <TableContainer >
                <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
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
                    </TableBody>
                </Table>
            </TableContainer>
            <p>Holding Shift whilst manipulating shapes allows axis tilt</p>
        </Stack>
      </Menu>
  );
}

export default ContextMenu;