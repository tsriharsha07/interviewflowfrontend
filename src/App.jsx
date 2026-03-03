import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// authentication
import AuthPage from "./containers/AuthPage/AuthPage";

// layout
import Layout from "./containers/Layout/Layout";

// workspace
import WorkspaceList from "./containers/WorkspaceList/WorkspaceList";
import WorkspaceDetail from "./containers/WorkspaceDetail/WorkspaceDetail";
import WorkspaceSettings from "./containers/WorkspaceSettings/WorkspaceSettings";
import WorkspaceInvite from "./containers/WorkspaceInvite/WorkspaceInvite";
import WorkspaceMembers from "./containers/WorkspaceMembers/WorkspaceMembers";

// projects
import ProjectList from "./containers/ProjectList/ProjectList";
import ProjectDetail from "./containers/ProjectDetail/ProjectDetail";
import ProjectSettings from "./containers/ProjectSettings/ProjectSettings";

// boards & tasks
import BoardView from "./containers/BoardView/BoardView";
import ColumnManagement from "./containers/ColumnManagement/ColumnManagement";
import TaskList from "./containers/TaskList/TaskList";
import TaskDetail from "./containers/TaskDetail/TaskDetail";

// notifications
import NotificationCenter from "./containers/NotificationCenter/NotificationCenter";
import NotificationPreferences from "./containers/NotificationPreferences/NotificationPreferences";

// other
import SearchPage from "./containers/SearchPage/SearchPage";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import { useAuthStore } from "./store/auth.store";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // let isAuthenticated = false;
  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WorkspaceList />} />
          <Route path="workspaces" element={<WorkspaceList />} />
          <Route path="workspaces/:id" element={<WorkspaceDetail />} />
          <Route
            path="workspaces/:id/settings"
            element={<WorkspaceSettings />}
          />
          <Route path="workspaces/:id/invite" element={<WorkspaceInvite />} />
          <Route path="workspaces/:id/members" element={<WorkspaceMembers />} />

          <Route path="projects" element={<ProjectList />} />
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="projects/:id/settings" element={<ProjectSettings />} />

          <Route path="boards/:id" element={<BoardView />} />
          <Route path="boards/:id/columns" element={<ColumnManagement />} />
          <Route path="tasks" element={<TaskList />} />
          <Route path="tasks/:id" element={<TaskDetail />} />

          <Route path="notifications" element={<NotificationCenter />} />
          <Route
            path="notifications/preferences"
            element={<NotificationPreferences />}
          />

          <Route path="search" element={<SearchPage />} />
          <Route path="profile" element={<ProfilePage />} />

          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
