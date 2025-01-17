import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Components/Style.css";
import SquircleContainer from './Components/SquircleContainer';
import SquircleBlue from './Components/SquircleBlue';
import SquircleOrange from './Components/SquircleOrange';
import TitleContainer from './Components/TitleContainer';
import Item from './Components/Item';
import ItemList from './Components/ItemList';
import InfoContainer from './Components/InfoContainer';
import Button from './Components/Button';
import Pdf from './ChristopherResume.pdf';
import Logos from './Components/Logos';
import Nav from './Components/Nav';
import ButtonsContainer from './Components/ButtonsContainer';
import BentoContainer from './Components/BentoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<Nav>
			<div className="nav-sub">
				<img 
					src="./imgs/logo.png" 
					alt="" 
					className="header-icon" 
				/>
				<a href="#home">Christopher Logan Hernandez</a>
			</div>
			<div className="nav-sub">
				<ul>
					<Button link="#home" color="white">Home</Button>
					<Button link="#skills" color="white">Skills</Button>
					<Button link="#projects" color="white">Projects</Button>
					<Button link="#contact-me" color="black">Contact Me</Button>
				</ul>
			</div>
		</Nav>
		<SquircleContainer id="home">
			<SquircleBlue>
				<small>Hi I'm</small>
				<h1 className='contact-row'>Christopher Logan Hernandez</h1>
				<p>I'm a Full-Stack Developer based in Edmonton, passionate about building engaging games and 
					intuitive web and mobile apps. I enjoy working with tools like React, React Native, Express/Node.js, 
					and Unity, and I'm always exploring new frameworks to push my projects further. I'm currently refining 
					my personal projects and expanding my cloud computing skills with AWS.</p>
					<ButtonsContainer>
						<Button link={Pdf} color="black">View Resume</Button>
						<Button link="#contact-me" color="white">Contact Me</Button>
					</ButtonsContainer>
					<a href="https://github.com/Thunder117">
						<img src="./imgs/github.png" alt="GitHub" width="48" />
					</a>
			</SquircleBlue>	
		</SquircleContainer>
		<Logos/>
		<TitleContainer subtitle="My" title="Skills" id="skills"/>
		<SquircleContainer>
			<SquircleBlue>
				<h2>Programming Languages</h2>
				<ItemList>
					<Item>JavaScript</Item>
					<Item>JSX</Item>
					<Item>C#</Item>
					<Item>C++</Item>
					<Item>Python</Item>
				</ItemList>
				<h2>Frontend</h2>
				<ItemList>
					<Item>HTML</Item>
					<Item>CSS</Item>
					<Item>React</Item>
					<Item>React Native</Item>
					<Item>Tailwind</Item>
				</ItemList>
				<h2>Backend</h2>
				<ItemList>
					<Item>Node.js</Item>
					<Item>Express</Item>
					<Item>JWT</Item>
				</ItemList>
				<h2>Databases</h2>
				<ItemList>
					<Item>MongoDB</Item>
					<Item>SQL</Item>
				</ItemList>
			</SquircleBlue>
			<SquircleOrange>
				<h2>A bit about me...</h2>
				<p> As a Full-Stack Developer, I specialize in building engaging games and intuitive web and mobile 
					applications using technologies like React, React Native, Express/Node.js, and Unity. 
					I’ve developed a full-featured book club web app and a personal portfolio site, both showcasing 
					my ability to create responsive, user-focused designs. </p>
				<p>My work also includes integrating secure authentication, managing databases with MongoDB, and 
					implementing smooth animations. I'm continually exploring new frameworks and enhancing my cloud 
					computing skills.</p>
			</SquircleOrange>
		</SquircleContainer>
		<TitleContainer subtitle="Some of my" title="Projects" color="blue" id="projects"/>
		<BentoContainer/>
		<TitleContainer subtitle="Feel free to" title="Contact Me" id="contact-me"/>
		<InfoContainer>
			<div className="contact-row">
				<img 
					src="./imgs/phone.png" 
					alt="" 
					className="contact-icon" 
				/>
				<h2>(250) 858 9453</h2>
			</div>
			<div className="contact-row">
				<img 
					src="./imgs/email.png" 
					alt="" 
					className="contact-icon" 
				/>
				<h2>christopherlogan2000@outlook.com</h2>
			</div>
			<Button link={Pdf} color="black">View Resume</Button>
		</InfoContainer>
	</div>
);