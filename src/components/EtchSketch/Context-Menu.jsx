import React, { useEffect, useState } from "react";
import { Menu, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Stack, Button, ButtonGroup} from '@mui/material';

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
                            <TableCell>Move Up</TableCell>
                            <TableCell>Up Arrow</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Move Down</TableCell>
                            <TableCell>Down Arrow</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Move Right</TableCell>
                            <TableCell>Right Arrow</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Move Left</TableCell>
                            <TableCell>Left Arrow</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Move NE</TableCell>
                            <TableCell>Shift + Up</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Move SE</TableCell>
                            <TableCell>Shift + Right</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Move SW</TableCell>
                            <TableCell>Shift + Down</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Move NW</TableCell>
                            <TableCell>Shift + Left</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Move across screen repeatedly to reset canvas</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Drawing starts in the bottom left of the canvas</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Stack>
      </Menu>
  );
}

export default ContextMenu;