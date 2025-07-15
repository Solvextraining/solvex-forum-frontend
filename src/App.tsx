
import './App.css';

function App() {
  return (
    <div className="forum-container">
      <header className="forum-header">
        <div className="logo">
          <span className="solve">Solve</span><span className="x">X</span><span className="training">training</span>
        </div>
        <h1>Community Forum</h1>
        <p>Connect, collaborate, and solve problems together.</p>
      </header>

      <nav className="forum-nav">
        <button className="nav-btn active">All Categories</button>
        <button className="nav-btn">My Threads</button>
        <button className="nav-btn">New Post</button>
      </nav>

      <main className="forum-main">
        <section className="forum-categories">
          <h2>Forum Categories</h2>
          <div className="category-grid">
            <div className="category-card">
              <h3>General Discussion</h3>
              <p>Open space for community-wide conversations and informal interactions.</p>
              <span>120 Threads</span>
            </div>
            <div className="category-card">
              <h3>Course-Specific Q&A</h3>
              <p>Separate threads for each course or training module, allowing targeted help and peer support.</p>
              <span>85 Threads</span>
            </div>
            <div className="category-card">
              <h3>Case Study Discussions</h3>
              <p>Deep dives into case studies with structured prompts and analysis sharing.</p>
              <span>45 Threads</span>
            </div>
            <div className="category-card">
              <h3>Technical Support</h3>
              <p>Platform or access issues, with moderator/instructor assistance.</p>
              <span>30 Threads</span>
            </div>
            <div className="category-card">
              <h3>Announcements</h3>
              <p>Admin-only area for official updates, event notices, or policy changes.</p>
              <span>15 Threads</span>
            </div>
            <div className="category-card">
              <h3>Feedback & Suggestions</h3>
              <p>Collect user input on platform experience and course content.</p>
              <span>25 Threads</span>
            </div>
          </div>
        </section>

        <section className="forum-posts">
          <h2>Recent Posts</h2>
          <div className="post-list">
            <div className="post-card">
              <h3>How to apply A3 thinking to daily operations?</h3>
              <p className="post-meta">Posted by John Doe in General Discussion | 2 hours ago</p>
              <p>Looking for practical tips on integrating A3 problem-solving into our daily workflow. Any success stories or challenges?</p>
              <div className="post-actions">
                <span>👍 15</span>
                <span>💬 5</span>
              </div>
            </div>
            <div className="post-card">
              <h3>Question about Six Sigma DMAIC Phase: Control</h3>
              <p className="post-meta">Posted by Jane Smith in Course-Specific Q&A | 1 day ago</p>
              <p>Struggling with setting up control charts for a new process. Any advice on selecting the right type of chart?</p>
              <div className="post-actions">
                <span>👍 8</span>
                <span>💬 3</span>
              </div>
            </div>
            <div className="post-card">
              <h3>Discussing Case Study: Steel Production Quality Issue</h3>
              <p className="post-meta">Posted by Admin in Case Study Discussions | 3 days ago</p>
              <p>Let's discuss the recent steel production quality issue case study. What were your key takeaways and alternative solutions?</p>
              <div className="post-actions">
                <span>👍 22</span>
                <span>💬 10</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;


