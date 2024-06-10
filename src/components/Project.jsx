export default function Project({ workshop }) {
  return (
    <div className="card card-compact h-[480px] md:w-96 gap-4 shadow-xl bg-componentcol hover:border-greenbtn border-2 border-bckcl hover:scale-110 text-textColor mt-10">
      <figure>
        <img className=" " src={workshop.workshopImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{workshop.workshopName}</h2>
        <p>{workshop.workshopDesc}</p>
        <div className="card-actions justify-end">
          <a
            href={workshop.workshopLink}
            target="_blank"
            className="btn btn-primary bg-greenbtn border-bckcl hover:bg-greenovbtn hover:border-bckcl"
          >
            Visitez
          </a>
        </div>
      </div>
    </div>
  );
}
