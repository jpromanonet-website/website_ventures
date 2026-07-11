import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const NEON = "#00ff9c";
const NEON_DIM = "#00c878";
const CYAN = "#2de2e6";
const VOID = "#05080c";
const PANEL = "#0a1016";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: NEON,
    },
    secondary: {
      main: CYAN,
    },
  },
  typography: {
    fontFamily: ['"Space Grotesk"', '"Oxanium"', "Roboto", "Helvetica", "Arial", "sans-serif"],
    h4: {
      fontFamily: '"Oxanium", sans-serif',
      fontWeight: 700,
      fontSize: 28,
      lineHeight: "2rem",
      letterSpacing: "0.04em",
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 400,
      lineHeight: "2rem",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  // Header Styles
  header: {
    background: "rgba(5, 8, 12, 0.94) !important",
    backdropFilter: "blur(14px) saturate(1.3)",
    borderBottom: "1px solid rgba(0, 255, 156, 0.18)",
    boxShadow: "0 0 30px rgba(0, 255, 156, 0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    color: "#e8fff4",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 70,
  },
  logo: {
    fontFamily: '"Oxanium", sans-serif',
    fontWeight: 800,
    color: "#e8fff4",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textShadow: "0 0 14px rgba(0, 255, 156, 0.35)",
    "&:hover": {
      color: NEON,
      transition: "color 0.3s ease",
    },
  },
  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
  },
  headerButton: {
    color: "#e8fff4",
    fontFamily: '"Share Tech Mono", monospace',
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontSize: "0.82rem",
    padding: "8px 14px",
    border: "1px solid transparent",
    clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
    "&:hover": {
      backgroundColor: "rgba(0, 255, 156, 0.08)",
      borderColor: "rgba(0, 255, 156, 0.35)",
      color: NEON,
      textShadow: "0 0 12px rgba(0, 255, 156, 0.55)",
    },
  },
  themeToggle: {
    color: "#e8fff4",
    fontFamily: '"Share Tech Mono", monospace',
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    fontSize: "0.82rem",
    padding: "8px 14px",
    border: "1px solid rgba(0, 255, 156, 0.18)",
    clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
    "&:hover": {
      backgroundColor: "rgba(0, 255, 156, 0.08)",
      borderColor: NEON,
      color: NEON,
    },
  },

  // Hero Section
  heroSection: {
    background: `
      radial-gradient(ellipse 80% 60% at 70% 40%, rgba(0, 255, 156, 0.14), transparent 55%),
      radial-gradient(ellipse 50% 40% at 20% 70%, rgba(45, 226, 230, 0.1), transparent 50%),
      linear-gradient(160deg, #020507 0%, #07141a 45%, #03100c 100%)
    `,
    padding: theme.spacing(10, 0, 12),
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      opacity: 0.35,
      backgroundImage: `
        linear-gradient(rgba(0, 255, 156, 0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 156, 0.18) 1px, transparent 1px)
      `,
      backgroundSize: "56px 56px",
      maskImage: "radial-gradient(ellipse at 60% 50%, black 20%, transparent 75%)",
      pointerEvents: "none",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: "-10%",
      right: "-10%",
      bottom: "-8%",
      height: "45%",
      background: `
        linear-gradient(90deg, transparent 0%, rgba(0, 255, 156, 0.25) 50%, transparent 100%),
        repeating-linear-gradient(90deg, transparent 0, transparent 48px, rgba(0, 255, 156, 0.18) 49px, transparent 50px),
        repeating-linear-gradient(0deg, transparent 0, transparent 48px, rgba(0, 255, 156, 0.14) 49px, transparent 50px)
      `,
      transform: "perspective(420px) rotateX(62deg)",
      transformOrigin: "center bottom",
      opacity: 0.4,
      maskImage: "linear-gradient(to top, black 10%, transparent 90%)",
      pointerEvents: "none",
    },
  },
  heroContent: {
    textAlign: "left",
    color: "#e8fff4",
    position: "relative",
    zIndex: 1,
    maxWidth: 900,
  },
  heroTitle: {
    fontFamily: '"Oxanium", sans-serif',
    fontWeight: 800,
    marginBottom: theme.spacing(2),
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    color: "#fff",
    textShadow: "0 0 20px rgba(0, 255, 156, 0.35), 0 0 60px rgba(0, 255, 156, 0.15)",
  },
  heroSubtitle: {
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 400,
    marginBottom: theme.spacing(2),
    color: NEON,
    letterSpacing: "0.06em",
    textShadow: "0 0 14px rgba(0, 255, 156, 0.45)",
  },
  heroDescription: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: "1.1rem",
    color: "rgba(232, 255, 244, 0.78)",
    maxWidth: 600,
    lineHeight: 1.6,
  },

  // Filters Section
  filtersSection: {
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(4),
    position: "relative",
    zIndex: 2,
  },
  filtersPaper: {
    padding: theme.spacing(3),
    borderRadius: 0,
    clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
    boxShadow: "0 0 40px rgba(0, 255, 156, 0.08)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(0, 255, 156, 0.18)",
    background: "rgba(10, 16, 22, 0.95)",
  },
  categorySelect: {
    fontFamily: '"Share Tech Mono", monospace',
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: NEON,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: NEON,
      },
    },
  },
  searchField: {
    fontFamily: '"Share Tech Mono", monospace',
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: NEON,
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: NEON,
      },
    },
  },
  projectCounter: {
    borderRadius: 0,
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    borderColor: `${NEON} !important`,
    color: `${NEON} !important`,
  },

  // Projects Section
  projectsSection: {
    padding: theme.spacing(4, 0),
  },
  projectCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
    background: PANEL,
    border: "1px solid rgba(0, 255, 156, 0.18)",
    clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 0 28px rgba(0, 255, 156, 0.22)",
      borderColor: NEON,
      "& $cardMedia": {
        transform: "scale(1.04)",
      },
    },
  },
  cardMedia: {
    height: 200,
    transition: "transform 0.3s ease",
    objectFit: "cover",
  },
  cardContent: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  projectTitle: {
    fontFamily: '"Oxanium", sans-serif',
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    lineHeight: 1.3,
    letterSpacing: "0.02em",
    color: theme.palette.text.primary,
  },
  cardActions: {
    padding: theme.spacing(2),
    justifyContent: "space-between",
    gap: theme.spacing(1),
  },
  actionButton: {
    borderRadius: 0,
    textTransform: "uppercase",
    fontFamily: '"Share Tech Mono", monospace',
    fontWeight: 500,
    letterSpacing: "0.04em",
    minWidth: 80,
    clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
    "&:hover": {
      transform: "translateY(-2px)",
      transition: "transform 0.2s ease",
    },
  },

  // No Results
  noResults: {
    textAlign: "center",
    padding: theme.spacing(8, 0),
    fontFamily: '"Share Tech Mono", monospace',
    "& h6": {
      marginBottom: theme.spacing(1),
      color: NEON,
    },
  },

  // Footer Section
  footerSection: {
    background: `
      linear-gradient(180deg, transparent, rgba(0, 255, 156, 0.04)),
      linear-gradient(160deg, #020507 0%, #07141a 100%)
    `,
    borderTop: "1px solid rgba(0, 255, 156, 0.18)",
    padding: theme.spacing(4, 0),
    marginTop: theme.spacing(6),
  },

  // Scroll to Top Button
  scrollTopButton: {
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: 1000,
    background: NEON,
    color: "#03140c",
    borderRadius: 0,
    clipPath: "polygon(18% 0, 100% 0, 100% 82%, 82% 100%, 0 100%, 0 18%)",
    boxShadow: "0 0 28px rgba(0, 255, 156, 0.45)",
    "&:hover": {
      background: "#b8ff3c",
      transform: "translateY(-2px)",
      boxShadow: "0 0 36px rgba(0, 255, 156, 0.55)",
    },
    transition: "all 0.3s ease",
  },

  // Responsive Design
  "@media (max-width: 960px)": {
    heroTitle: {
      fontSize: "2.5rem",
    },
    heroSubtitle: {
      fontSize: "1.1rem",
    },
    filtersPaper: {
      padding: theme.spacing(2),
    },
    heroContent: {
      textAlign: "center",
    },
  },
  "@media (max-width: 600px)": {
    toolbar: {
      minHeight: 60,
    },
    logo: {
      fontSize: "1.15rem",
    },
    heroSection: {
      padding: theme.spacing(6, 0, 8),
    },
    heroTitle: {
      fontSize: "1.85rem",
    },
    heroSubtitle: {
      fontSize: "0.95rem",
    },
    filtersSection: {
      marginTop: theme.spacing(-2),
    },
    filtersPaper: {
      padding: theme.spacing(2),
    },
    projectCard: {
      "&:hover": {
        transform: "none",
      },
    },
    scrollTopButton: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      width: 48,
      height: 48,
    },
  },

  // Legacy styles for backward compatibility
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "2rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    gap: "1rem",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    "& svg": {
      fontSize: "2rem",
      cursor: "pointer",
      color: NEON,
    },
  },
  footerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export { theme, useStyles, NEON, NEON_DIM, CYAN, VOID, PANEL };
