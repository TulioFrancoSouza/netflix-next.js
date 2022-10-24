import { apiKey, apiBase} from '../../lib/tmdb';

export default async (req, res) =>{

  const result = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}`)
  const json = await result.json();

  res.status(200).json({
    list: json.results
  })
}