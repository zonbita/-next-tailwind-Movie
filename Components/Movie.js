import Image from "next/image";
import Link from "next/link";

const Movie = ({ movie }) => {
  return (
    <li className='w-full h-full' data-aos='fade-up-right' data-aos-once='false'>
    <Link href={`/movie/${movie.id}`} passHref>
      <div className="bg-white shadow-sm rounded-md cursor-pointer hover:bg-slate-700 w-full h-full">
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} loading='eager' layout='responsive' objectFit='fill' width={237} height={271} className="rounded-t-md" alt={movie.title} />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
        </div>
      </div>
    </Link>
    </li>
  )
}

export default Movie;