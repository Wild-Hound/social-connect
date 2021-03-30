import './App.css';
import PostsArea from './components/PostsArea/PostsArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserProfile from './components/UserProfile/UserProfile';
import NoMatch from './components/NoMatch/NoMatch';
import AppBarEx from './components/AppBar/AppBarEx';
import TagPosts from './components/TagPostsArea/TagPosts';


function App() {
  return (
    <Router>
      <div className="App">
        <AppBarEx></AppBarEx>
          <Switch>
            <Route exact path="/">
              <PostsArea></PostsArea>
            </Route>
            <Route path="/profile/:id">
              <UserProfile></UserProfile>
            </Route>
            <Route path="/tag/:id">
              <TagPosts></TagPosts>
            </Route>
            <Route>
              <NoMatch/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
