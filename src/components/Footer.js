import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#e8fff4',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  socialIcon: {
    color: '#e8fff4',
    width: 48,
    height: 48,
    padding: 0,
    borderRadius: '0 !important',
    border: '1px solid rgba(0, 255, 156, 0.18)',
    clipPath: 'polygon(18% 0, 100% 0, 100% 82%, 82% 100%, 0 100%, 0 18%)',
    transition: 'all 0.3s ease',
    '& .MuiIconButton-label': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .MuiTouchRipple-root': {
      borderRadius: 0,
    },
    '&:hover': {
      transform: 'translateY(-4px)',
      color: '#03140c',
      backgroundColor: '#00ff9c',
      borderColor: '#00ff9c',
      boxShadow: '0 0 20px rgba(0, 255, 156, 0.4)',
    },
  },
  footerText: {
    opacity: 0.8,
    fontSize: '0.9rem',
    fontFamily: '"Share Tech Mono", monospace',
    letterSpacing: '0.04em',
    '& a': {
      color: '#00ff9c',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
        textShadow: '0 0 10px rgba(0, 255, 156, 0.35)',
      },
    },
  },
  divider: {
    width: '50px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00ff9c, transparent)',
    boxShadow: '0 0 12px rgba(0, 255, 156, 0.45)',
    margin: theme.spacing(2, 'auto'),
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Box className={classes.socialLinks}>
        <IconButton
          href="https://twitter.com/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="Twitter"
        >
          <TwitterIcon style={{ fill: "currentColor" }} />
        </IconButton>
        <IconButton
          href="https://instagram.com/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="Instagram"
        >
          <InstagramIcon style={{ fill: "currentColor" }} />
        </IconButton>
        <IconButton
          href="https://github.com/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="GitHub"
        >
          <GitHubIcon style={{ fill: "currentColor" }} />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/jpromanonet"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.socialIcon}
          aria-label="LinkedIn"
        >
          <LinkedInIcon style={{ fill: "currentColor" }} />
        </IconButton>
        <IconButton
          href="mailto:contact@jpromanonet.net"
          className={classes.socialIcon}
          aria-label="Email"
        >
          <EmailIcon style={{ fill: "currentColor" }} />
        </IconButton>
      </Box>
      
      <Box className={classes.divider} />
      
      <Typography variant="body2" className={classes.footerText}>
        © 2025 Juan P. Romano. Built with ❤️.
      </Typography>
    </Box>
  );
}

export default Footer;
