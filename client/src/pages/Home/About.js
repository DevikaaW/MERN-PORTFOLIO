import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills = [
        "React",
        "Node",
        "Express",
        "Java",
        "Android",
        "SQL",
        "Python",
        "Firebase",
        "C++",
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className='flex w-full items-center sm:flex-col'>
                <div className='h-[70vh] w-1/2 sm:w-full'>
                    <dotlottie-player src="https://lottie.host/bb063029-9058-4632-a55a-6656704070df/7MFyLt9C9U.lottie"
                        background="transparent"
                        speed="1"
                        loop autoplay>
                    </dotlottie-player>
                </div>
                <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
                    <p className='text-white'>
                        I am a dedicated Software Developer with over three years of experience in full-stack development, cloud technologies, and data integration.
                        My expertise spans Java, Python, JavaScript, React.js, Node.js, SQL, and DevOps automation, allowing me to design and deploy scalable solutions.
                        With a strong foundation in database management, backend development, and cloud computing, I have successfully built API-driven applications, automated CI/CD pipelines, and containerized microservices with Kubernetes and Docker.
                        My ability to optimize ETL workflows and enhance system interoperability has improved efficiency and performance in various projects.
                    </p>
                    <p className='text-white'>
                        Currently pursuing my Master’s in Computer Science at the University of Colorado, Denver, I focus on Big Data Science, Cybersecurity, AI, and IoT, applying cutting-edge technologies to real-world challenges.
                        My work on projects like cybersecurity in Android apps, reinforcement learning for lunar landers, and Twitter network analysis showcases my passion for problem-solving and innovation.
                        With experience in collaborating with cross-functional teams, leading Agile sprints, and mentoring interns, I thrive in dynamic environments where I can continuously learn, adapt, and contribute to impactful solutions.
                    </p>
                </div>
            </div>
            <div py-5>
                <h1 className='text-tertiary text-xl'>
                    Here are a few technologies I've worked with recently:
                </h1>
                <div className='flex flex-wrap gap-10 mt-5'>
                    {skills.map((skills, index)=>(
                        <div key={index} className='border border-tertiary py-3 px-10'>
                            <h1 className='text-tertiary'>{skills}</h1>
                        </div>    
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default About