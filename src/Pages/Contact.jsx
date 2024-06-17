export default function Contact() {
  const handleClick = () => {
    window.location.href =
      "mailto:Hippolyte.weber@gmail.com?subject=Subject&body=body";
  };

  return (
    <div className="mt-20 flex justify-center items-center text-neutral-950">
      <div className="mt-8">
        <ul className="pt-4 flex items-center flex-col p-10 text-center">
          <img src="/static/images/icons8-linkedin-100.png" className="w-12" />

          <a
            href="https://www.linkedin.com/in/hippolyteweber/"
            target="_blank"
            className=" w-24 m-6 bg-neutral-50 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium"
          >
            <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
              Linkedin
            </div>
            <div className="bg-neutral-50 absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="bg-greenbtn absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
              <span className="z-10">Linkedin</span>
            </div>
          </a>
          <img src="/static/images/githubwhite.png" className="w-12" />

          <a
            href="https://github.com/HippolyteWeber"
            target="_blank"
            className="w-24 m-6 bg-neutral-50 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium"
          >
            <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
              Github
            </div>
            <div className="bg-neutral-50 absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="bg-greenbtn absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
              <span className="z-10">Github</span>
            </div>
          </a>

          <img src="/static/images/mailwhite.png" className="w-12" />
          <a
            onClick={handleClick}
            className=" w-24 m-6 bg-neutral-50 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium"
          >
            <div className="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
              Email
            </div>
            <div className="bg-neutral-50 absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
              <span className="bg-greenbtn absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
              <span className="z-10">Email</span>
            </div>
          </a>
        </ul>
      </div>
    </div>
  );
}
