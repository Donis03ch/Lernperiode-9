import { useState } from 'react';
import './App.css';

//Grid-layout
function Grid() {
    return (
        <div className="grid-container">
            <div className="grid-header"><Header /></div>
            <div className="grid-main"><Main /></div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
        </div>
    );
}

//Header
function Navbar(){
       return (
        <>
        <ul className='navBar'>
        <li className="navLink">
                    <a href="about.html">About Me</a>
                </li>
                <li className="navLink">
                    <a href="projects.html">Projects</a>
                </li>
        </ul>
        </>
       );
}

function Header(){
    return (
        <section>
            <Navbar />
        </section>
    );
}

//Main-section
function Main() {
    return (
        <>
        <Intro />
        <Skills />
        </>
    )
}

function Intro() {
    return (
        <>
        <div className='name'>
        <h1>Brandon</h1>
        <h2>an upcoming developer</h2>
        </div>
        <div className='introduction'>
            <p>Hallo, ich bin ein Schüler, der davor ist, ein Applikationsentwickler zu werden. </p>
        </div>
        </>
    )
}

function Skills() {
    return (
        <>
        <div className='skillsIntro'>
            <h1>Meine Skills</h1>
            <h2>Wichtige Erkenntnisse</h2>
        </div>
        <div className='skillSet'>
            <h2>Frontend</h2>
            <ul className='skills'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>ReactJS</li>
            </ul>

            <h2>Backend</h2>
            <ul className='skills'>
                <li>C#</li>
                <li>MSSQL</li>
                <li>Docker</li>
            </ul>
        </div>
        </>
    )
}

//Footer

export default function MyApp() {  
    return (
      <div>
        <Grid />
      </div>
    );
  }
