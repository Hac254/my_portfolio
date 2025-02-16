import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ResumeSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold underline-gradient">AWS Cloud Practitioner Training</h3>
            <p className="text-sm text-muted-foreground">Jan — April 2024</p>
            <p className="mt-2 text-sm">
              Underwent a series of Instructor led Online training sessions where I was taught by AWS Trainers on the
              cloud Computing architecture and other modules. The training lasted three months spanning from January to
              April when I sat for the certification exam and got certified as a cloud practitioner.
            </p>
          </div>
          <div>
            <h3 className="font-semibold underline-gradient">University Education</h3>
            <p className="text-sm text-muted-foreground">2019 — 2023</p>
            <p className="mt-2 text-sm">
              I got my bachelor's degree from Kibabii University, located in Bungoma county, Kenya, where I took a four
              year course, Bachelors of Science in Information Technology. Offered under the school of Computing and
              Informatics. I graduated on December 23rd 2023.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="my-8 h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50"></div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Work Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold underline-gradient">Lecturer</h3>
            <p className="text-sm text-muted-foreground">February 2025 — Present</p>
            <p className="mt-2 text-sm">
              Currently serving as a Lecturer at Thika Technical Training Institute, teaching IT-related courses to students. 
              Responsible for curriculum delivery, student mentoring, and practical training in various Information Technology subjects.
            </p>
          </div>
          <div>
            <h3 className="font-semibold underline-gradient">Digital Resource Creator</h3>
            <p className="text-sm text-muted-foreground">2024 April — Present</p>
            <p className="mt-2 text-sm">
              Current role at Fikia LTD as a Digital Resource Creator, providing IT support, web development, lesson
              plan creation, and web app/game development.
            </p>
          </div>
          <div>
            <h3 className="font-semibold underline-gradient">Freelancer</h3>
            <p className="text-sm text-muted-foreground">2023 — Present</p>
            <p className="mt-2 text-sm">
              Working on various projects, delivering high-quality results and forming genuine connections with clients
              worldwide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold underline-gradient">IT Assistant</h3>
            <p className="text-sm text-muted-foreground">2022 — 2023</p>
            <p className="mt-2 text-sm">
              Previous role at KenGen where I immersed myself in the world of IT, tackling diverse challenges and
              fostering growth. I contributed to streamlining processes, enhancing system efficiency, and ensuring
              smooth operations. My tenure solidified my technical skills and emphasized the value of teamwork. I took
              pride in being a reliable resource, leveraging technology to drive organizational success and empower my
              colleagues.
            </p>
          </div>
          <div>
            <h3 className="font-semibold underline-gradient">Admissions Clerk</h3>
            <p className="text-sm text-muted-foreground">2020 — 2024</p>
            <p className="mt-2 text-sm">
              During my tenure as a part-time Admissions Clerk at Kibabii University, I efficiently managed admissions
              processes, ensuring accuracy and timeliness in handling student applications.Contributing to a seamless
              experience for both students and staff. I thrived in a fast-paced environment, adapting quickly to
              evolving needs and consistently delivering results. My time at Kibabii University reinforced the
              importance of effective communication and teamwork in achieving shared goals.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold gradient-text">Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Web Development", value: 90 },
            { name: "Graphics Design", value: 70 },
            { name: "App Development", value: 40 },
            { name: "Photography", value: 80 },
          ].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm font-medium">{skill.value}%</span>
              </div>
              <Progress value={skill.value} className="h-2 gradient-bg" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* New Download Resume Button */}
      <div className="flex justify-center mt-8">
        <Button
          className="bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
          onClick={() => window.open("https://drive.google.com/file/d/1yWPPAR6k2VrwdnjQIcSZG1I7ZksunfVk/view?usp=sharing", "_blank")}
        >
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </Button>
      </div>
    </div>
  )
}

