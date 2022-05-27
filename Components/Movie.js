import Image from "next/image";
import Link from "next/link";

const Movie = ({ movie }) => {
  return (
    <li className='pt-12 text-white' data-aos='fade-up-right' data-aos-once='false'>
    <Link href={`/movie/${movie.id}`} >

      <div className="cursor-pointer w-full h-full hover:text-red-500">
        <Image className="hover:opacity-60 rounded-[30px]" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  loading='lazy' layout='responsive' objectFit='fill' width={239} height={383} alt={movie.title} />
        <div className="px-4 py-2">
          <div className=" font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-400 text-base mb-1">{movie.release_date}</p>
        </div>
      </div>

    </Link>
    </li>
  )
}

export default Movie;