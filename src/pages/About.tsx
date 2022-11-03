function About() {
  return (
    <div className="flex-1 prose flex mx-6 my-6 flex-col lg:w-1/2 lg:mx-auto justify-center gap-6 text-xl bg-gray-900/30 shadow-xl p-10">
      <h1>About</h1>

      <p>
        Hello, I am Ayberk <em>"Wralith"</em> Caliskan 👋
      </p>
      <p>
        Claude Lévi-Strauss claims that an hour's conversation with one of Plato's contemporaries would tell him more
        than all the lectures on the classics about Greek Antiquity.I believe that we are in the age of innovation and
        progress in terms of technology similar to what happened in Ancient Greece in thinking. And I want to be part of
        it!
      </p>

      <p>
        I started programming in February 2022, since then I have been working regularly and passionately which can be
        seen in my Github account.
      </p>

      <ul>
        <li>I love being part of something, collaborating, and sharing ideas in a productive environment!</li>
        <li>Learning is my biggest passion.</li>
        <li>I enjoy exploring new technologies and ideas.</li>
        <li>I always loved reading and writing, my social science background helped reinforcing it.</li>
        <li>I enjoy applying theories I read as demo projects.</li>
      </ul>

      <ul>
        <li>Programming languages I mostly write: Go, JavaScript/Typescript, SQL.</li>
        <li>
          Theory knowledge: As I mentioned, I love reading and exploring. I am trying to grasp fundamentals of software
          development as much as possible while focusing back-end design as a specialty.
        </li>
        <li>
          Framework knowledge: If I am creating front-end I mostly use React, but I tried many others, (i.e., Vue,
          Solid, Svelte). For server-side it depends on the problem and approach (i.e., gRPC for microservice
          communication, echo or fiber for go REST API.).
        </li>
        <li>Technologies I'm using frequently: Linux, Docker, Postgres, Redis.</li>
      </ul>
    </div>
  )
}

export default About
