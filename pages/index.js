import axios from "axios";
import Hero from "../Components/Hero";
import PopularMovie from "../Components/PopularMovie";
import { server } from "../config";
import SimpleSlider from '../Components/SimpleSlider'
export default function Home({ movies }) {
  return (
    <div className="bg-gray-700">
      <SimpleSlider/>
      <PopularMovie movies={movies.results} />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;

  return {
    props: { movies }
  }
}