export default async function machinelearning(request, response) {
  const fetchData = await fetch(
    "https://dev.to/api/articles?tag=machinelearning"
  );
  const data = await fetchData.json();
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(data);
}

