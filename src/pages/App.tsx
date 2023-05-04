import { Header } from '../components/Header/Header';
import {Post, PostType} from '../components/Post/CreatePost/Post';
import { Sidebar } from '../components/Sidebar/Sidebar';

import styles from '../styles/App.module.css';
import '../styles/global.css';


const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/myzerx.png',
      name: 'Richard Lemos',
      role: 'SAP BTP Developer'
    },
    content: [
      { type: 'paragraph', content: 'Bom dia!',},
      { type: 'paragraph', content: 'Tudo certo?',},
      { type: 'link' , content:'jane.design/doctorcare',}          
    ],
    publishedAt: new Date('2023-03-30 10:43:00')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/grcamargo.png',
      name: 'Gustavo Camargo',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link' , content:'jane.design/doctorcare',}          
    ],
    publishedAt: new Date('2023-03-30 7:24:00')
  },
];

export function App() {
  return (
   <div>
    <Header />

    <div className={styles.wrapper}>
    <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              post={post}
            />
          )
        })}   
      </main>
    </div>  
   </div>
  )
}


