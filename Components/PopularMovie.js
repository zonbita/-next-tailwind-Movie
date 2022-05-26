import Movie from "./Movie";

const PopularMovie = ({ movies }) => {
  return (
    <div className=" bg-slate-800 container max-w-7xl mx-auto pb-10 p-4">
      <h1 className="text-white text-5xl text-center md:text-auto mb-2 p-3 uppercase md:w-min bg-[#008a6c] rounded-md shadow-inner">Popular</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {movies.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default PopularMovie;