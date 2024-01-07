// Install Material-UI using: npm install @mui/material @emotion/react @emotion/styled

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar, Container, Drawer, List, ListItem, ListItemText, Toolbar, Typography, makeStyles } from '@mui/material';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <List>
            <ListItem button component={Link} to="/dashboard">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/page1">
              <ListItemText primary="Page 1" />
            </ListItem>
            <ListItem button component={Link} to="/dashboard/page2">
              <ListItemText primary="Page 2" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Container>
            <Route path="/dashboard" exact render={() => <Typography variant="h4">Home</Typography>} />
            <Route path="/dashboard/page1" render={() => <Typography variant="h4">Page 1</Typography>} />
            <Route path="/dashboard/page2" render={() => <Typography variant="h4">Page 2</Typography>} />
          </Container>
        </main>
      </Router>
    </div>
  );
};

export default Dashboard;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
