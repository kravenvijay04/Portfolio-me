import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import Prompt from '../components/about/Prompt';
import { skills } from '../../lib/constants';

const SkillList = ({ title, items }: { title: string, items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}/</li>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow>
        <Prompt content="cd aboutVijay/" />
        <Prompt directory="/aboutVijay" branch={true} content="cat README.md" />
        <p>Hello there! I'm Vijayakumar, a frontend dev <b>from Easwari Engineering College</b>, specializing in <b>React, Angular</b>. On the backend side, I work with Express JS, Node JS and MongoDB, and I'm also intermediate in Data Structures and Algorithms (DSA) with C++ and Java.</p>
        <p>
        Even though I’m an Electronics Engineer, I’ve gained hands-on experience through internships in Zoho CRM at TATTI and AI/ML and Data Science at YBI Foundation. Outside of coding, I enjoy playing PC games like RDR 2, spending time with my cat, and exploring my creativity through doodling.</p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow>
        <Prompt content="cd skillsAndTools/Proficient" />
        <Prompt directory='/skillsAndTools/Proficient' branch={true} content="ls" />
        <div className='flex justify-start flex-wrap md:justify-between'>
          <ul>
            <SkillList title="TheObvious" items={skills.theObvious} />
            <SkillList title="ToolsOfTheTrade" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className="md:text-right">
            <SkillList title="LibrariesAndFrameworks" items={skills.librariesFrameworks} />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow>
        <Prompt content="cd HobbiesAndInterests/" />
        <Prompt directory='/HobbiesAndInterests' branch={true} content="ls" />
        <ul>
          <li>🎧 music listener</li>
          <li>🎬 movies</li>
          <li>✏️ doodles</li>
          <li>🐈 cat lover</li>
          <li>🎮 gamer</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
}

export default About;
