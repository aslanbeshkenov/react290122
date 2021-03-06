import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { Link, Outlet } from "react-router-dom";

export const Chats = () => {
    const chatItem = [{ name: 'Chat1', id: '1' }, { name: 'Chat2', id: '2' }];

    return (
        <>
            <List sx={{ width: '100%', maxWidth: 330, bgcolor: 'antiquewhite' }}>
                List of chats
                {chatItem.map(({ name, id }) => (
                    <ListItem
                        key={id}
                        disableGutters
                        secondaryAction={
                            <IconButton>
                                <CommentIcon />
                            </IconButton>
                        }
                        sx={{ paddingLeft: 1 }}
                    >
                        <Link to={`/chats/${id}`}><ListItemText primary={name} /></Link>
                    </ListItem>
                ))
                }
            </List >
            <Outlet />
        </>
    )
};
