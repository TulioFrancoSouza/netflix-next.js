import { apiKey, apiBase} from '../../../lib/tmdb';

export default async (req, res) =>{
  let id = req.query.id;
    const result = await fetch(`${apiBase}/movie/${id}?api_key=${apiKey}`)
  const json = await result.json();

  res.status(200).json({
    info: json
  });
}