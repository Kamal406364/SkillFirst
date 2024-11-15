import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SkillSidebar from './components/Skill_Taxonomy/Sidebar';
import SkillNavigationbar from './components/Skill_Taxonomy/Navigationbar';
import SkillSearchbar from './components/Skill_Taxonomy/Searchbar';
import SkillFilters from './components/Skill_Taxonomy/Fliters';
import SkillTable from './components/Skill_Taxonomy/Table';

import JobSidebar from './components/Job_Taxonomy/Sidebar';
import JobNavigationbar from './components/Job_Taxonomy/Navigationbar';
import JobSearchbar from './components/Job_Taxonomy/Searchbar';






function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/skill-taxonomy" element={
          <>
            <SkillNavigationbar/>
            <SkillSidebar/>
            <SkillSearchbar/>
            <SkillFilters/>
            <SkillTable/>
          </>
        } />

        <Route path="/job-taxonomy" element={
          <>
            <JobNavigationbar/>
            <JobSidebar/>
            <JobSearchbar/>
          </>
        } />

    </Routes>
    </Router>
  
  );
}

export default App;
