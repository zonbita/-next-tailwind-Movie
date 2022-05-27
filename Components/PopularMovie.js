import Movie from "./Movie";

const PopularMovie = ({ movies }) => {
  return (
    <div className="p-5 md:pb-12">
    <div className=" bg-slate-900 container max-w-7xl mx-auto p-4">
      <h1 className="text-white text-3xl font-extrabold text-center md:text-left px-5 pt-5 w-full">Trending Movies</h1>
      <div className="flex flex-row w-full h-full">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full">
        {movies?.map(movie => <Movie movie={movie} key={movie.id} />)}
      </div>
      </div>
    </div>
    </div>
  );
};

export default PopularMovie;