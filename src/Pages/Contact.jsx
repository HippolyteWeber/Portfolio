export default function Contact() {
  return (
    <div className="my-20 flex justify-center text-neutral-950">
      <div className="mt-8">
        <ul className="pt-4 flex flex-col p-10 text-center">
          <a
            href="https://www.linkedin.com/in/hippolyteweber/"
            target="_blank"
            className="m-6 bg-greenbtn rounded w-24 hover:bg-greenovbtn font-main"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/HippolyteWeber"
            target="_blank"
            className="m-6 bg-greenbtn rounded w-24 hover:bg-greenovbtn"
          >
            GitHub
          </a>
          <a className="m-6 bg-greenbtn rounded w-24 hover:bg-greenovbtn">
            Email
          </a>
        </ul>
      </div>
    </div>
  );
}
