/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-typos */
import Layout from "@components/Layout/layout";
import { IMDB_API_TOKEN } from "@config/index";
import { get_request } from "@setting/axiosSetting";
import TrendingPage from "@views/Trending.page";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const fetchTrandingMovies = async () => {
    const response = await get_request(`https://api.themoviedb.org/3/trending/all/day?api_key=${IMDB_API_TOKEN}`);
    return response.data.data;
  }

  const { data, status } = useQuery("trandingMovie", fetchTrandingMovies);

  if(status === "loading"){
    return <div>Loading...</div>
  }


  if(status === 'success'){
    dispatch({
      type: 'TRENDING_MOVIES',
      payload:data.results
    })
  }


  const dataResult = data.results;

  return (
    <div className="layout">
      <Layout>
        <TrendingPage
          data={dataResult}
        />
      </Layout>
    </div>
  )
}

Layout.defaultProps = {
  events: [],
}

// export async function getServerSideProps(){
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();
//   return {
//     props:{events}
//   }
// }
