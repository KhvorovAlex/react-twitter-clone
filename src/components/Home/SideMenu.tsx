//libraries
import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
//components
import TwitterIcon from '@material-ui/icons/Twitter'
import SearchIcon from '@material-ui/icons/Search'
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined'
import MessageIcon from '@material-ui/icons/EmailOutlined'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ListIcon from '@material-ui/icons/ListAltOutlined'
import UserIcon from '@material-ui/icons/PermIdentityOutlined'
import CreateIcon from '@material-ui/icons/Create'
import Hidden from '@material-ui/core/Hidden'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

const menuItems = [
    { title: 'Поиск', Img: SearchIcon },
    { title: 'Уведомления', Img: NotificationIcon },
    { title: 'Сообщения', Img: MessageIcon },
    { title: 'Закладки', Img: BookmarkIcon },
    { title: 'Список', Img: ListIcon },
    { title: 'Профиль', Img: UserIcon },
]

const useStylesSideMenu = makeStyles(theme => ({
    logo: {
        margin: '10px 0',
    },
    logoIcon: {
        fontSize: 36,
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
        },

        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
}))

export const SideMenu: React.FC = (): React.ReactElement => {
    const classes = useStylesSideMenu()

    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <Link to='/home'>
                    <IconButton className={classes.logo} aria-label='' color='primary'>
                        <TwitterIcon className={classes.logoIcon} />
                    </IconButton>
                </Link>
            </li>

            {menuItems.map(({ title, Img }) => (
                <li key={title} className={classes.sideMenuListItem}>
                    <div>
                        <Img className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant='h6'>
                                {title}
                            </Typography>
                        </Hidden>
                    </div>
                </li>
            ))}

            <li className={classes.sideMenuListItem}>
                <Button
                    className={classes.sideMenuTweetButton}
                    variant='contained'
                    color='primary'
                    fullWidth
                >
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
            </li>
        </ul>
    )
}
