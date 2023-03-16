import './styles/App.css'
//import Counter from './components/Counter/Counter.jsx'
//import ClassCountComponent from './components/ClassCountComponent/ClassCountComponent'
import HeaderLogo from './components/Header/HeaderLogo'
import SearchBar from './components/Header/HeaderSearch'
import AboutMe from './components/Post/PostAboutMe'
import Post from './components/Post/Post'
import Sidebar from './components/Sidebar/Sidebar'
import SidebarTwo from './components/Sidebar/SidebarTwo'
import Footer from './components/Footer/Footer'
import Comment from './components/Comment/CommentBox'
import Category from './components/Category/Category'
import SearchPost from './components/Search/SearchPost'
import Tag from './components/Tags/Tags'

function App() {
  const post1 = {
    author: 'John Doe',
    date: 'March 16, 2023',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit ac nulla convallis pulvinar in id velit. Nullam venenatis bibendum sem, nec gravida ex dignissim a. Nulla eu tortor vel nisi bibendum malesuada.',
  }

  return (
    <div className="App">
      <HeaderLogo />
      <SearchBar />
      <Category />
      <Sidebar />
      <SidebarTwo />
      <AboutMe />
      <Post author={post1.author} date={post1.date} body={post1.body} />
      <SearchPost />
      <Tag />
      <Comment />
      <Footer />
    </div>
  )
}

export default App
