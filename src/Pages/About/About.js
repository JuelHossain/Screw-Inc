import { Container } from '@mui/system';
import React from 'react';
import me from './me.png'
const Skill = ({children}) => {
    return <p className="uppercase p-5 border hover:bg-blue-400 hover:text-white">{children}</p>
}
const About = () => {
    return (
      <Container maxWidth={"lg"} sx={{ my: 10 }}>
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-2xl">
            <img
              className=" h-52 w-52 object-cover object-top  "
              src={me}
              alt="juel hossain"
            />
          </div>
          <div>
            <p className="text-4xl">Hi,</p>
            <p className="text-4xl">My Name Is Juel Hossain</p>
          </div>

          <div></div>
        </div>
        <div className="border h-10"></div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="text-2xl p-2 font-bold">My Skills</h6>
          <div className="flex flex-wrap">
            <Skill>html</Skill>
            <Skill>css</Skill>
            <Skill>Javascript</Skill>
            <Skill>BootStrap</Skill>
            <Skill>Tailwind Css</Skill>
            <Skill>Sass</Skill>
            <Skill>React Js</Skill>
            <Skill>Node Js</Skill>
            <Skill>Express Js</Skill>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="text-2xl p-2 font-bold">Projects</h6>
          <div className="flex flex-wrap">
            <Skill>
              <a href="https://tourboy.web.app/">Tour Boy</a>
            </Skill>
            <Skill>
              <a href="https://efruitsmanager.web.app/">Efruits-Management</a>
            </Skill>
            <Skill>
              <a href="https://ridethefuture.netlify.app/">Ride The Future</a>
            </Skill>
            <Skill>
              <a href="https://superheroshop.netlify.app/">SuperHero Shop</a>
            </Skill>
          </div>
          <div>
            
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="text-2xl p-2 font-bold">Educationl Background</h6>
          <div className="flex flex-wrap">
            <Skill>
              ssc in business in 2016
            </Skill>
            <Skill>
              dropped from College in 2018
            </Skill>
           
          </div>
          <div>
            
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="text-2xl p-2 font-bold">Contact Me.</h6>
          <div className="flex flex-wrap">
            <Skill>
             <a href="mailto:jrrahman01@gmail.com">Email Me</a>
            </Skill>
            <Skill>
             <a href="mailto:jrrahman01@gmail.com">At</a>
            </Skill>
            <Skill>
             <a href="mailto:jrrahman01@gmail.com">Jrrahman01@gmail.com</a>
            </Skill>
           
          </div>
          <div>
            
          </div>
        </div>
      </Container>
    );
};

export default About;