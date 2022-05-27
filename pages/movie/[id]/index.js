import axios from "axios";
import Image from "next/image";
import CastList from "../../../Components/CastList";
import Meta from "../../../Components/Meta";
import VideoList from "../../../Components/VideoList";
import { server } from "../../../config";
import { useRouter } from 'next/router'
const Movie = ({ movie }) => {
  return (
    <div className="h-full bg-[#0f0f0f] text-white">
      <div className="bg-cover" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}")`}} >
      <div className="custom_bg md:p-20">
      <div className="container max-w-6xl mx-auto pt-6">
        <Meta title={movie.title} />
        <div className="px-3">
          <div className="md:flex">

            <div className="md:flex-1 flex justify-center md:justify-start">
              <div className="w-[358px]">
              <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={358} height={600} className="rounded-md" alt={movie.title} />
              </div>
            </div>
            <div className="md:relative md:w-[70%]] pl-12">

                <h1 className="font-bold text-center text-5xl my-2 text-red-600">{movie.title}</h1>
                <p className="text-gray-400 text-lg mt-4">{movie.overview}</p>
                <p className="text-gray-400 text-lg mt-4">Site: {movie.homepage}</p>
                <p className="text-gray-400 text-lg mt-4">Ngôn ngữ: {movie.spoken_languages.map(v => v.name).join(', ')}</p>
                <p className="mt-5 text-gray-300 text-lg">Thể loại: <span className="font-bold">{movie.genres.map(genre => genre.name).join(', ')}</span></p>
                <p className="text-gray-300 text-lg pb-5">Ngày ra rạp: <span className="font-bold">{movie.release_date}</span></p>
                <p className="text-gray-300 text-lg pb-5">Vote: <span className="font-bold">{movie.vote_average}/10 - {movie.vote_count}</span></p>
                <div className="cast">
                    <div id={movie.id}><CastList id={movie.id}/>
                </div>
                </div>
                

            </div>
          </div>
          </div>

        

      </div>
      </div>
      </div>

      <div className="h-full container max-w-8xl mx-auto p-12">
            <VideoList id={movie.id}/>
      </div>

      
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=vi-VN&page=1`);
  const movie = res.data;

  return {
    props: { movie }
  }
}

export async function getStaticPaths() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=vi-VN&page=1`);
  const movies = res.data.results;

  const ids = movies.map(movie => movie.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false
  }
}

export default Movie;