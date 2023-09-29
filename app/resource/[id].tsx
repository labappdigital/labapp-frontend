import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import sanityClient from '../../sanity/client'; // Adjust the import path to your Sanity client configuration

function ResourcePage() {
  const router = useRouter();
  const { id } = router.query;
  const [playlistWithResources, setPlaylistWithResources] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch resource data from Sanity using the provided ID
      sanityClient
        .fetch(`*[_type == 'resource' && _id == $id][0]`, { id })
        .then((data) => {
          setPlaylistWithResources(data);
        })
        .catch((error) => {
          console.error('Error fetching resource data:', error);
          // Handle error as needed
        });
    }
  }, [id]);

  if (!playlistWithResources) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{playlistWithResources.title}</h1>
      <ul>
        {playlistWithResources.resources.map((resource) => (
          <li key={resource._id}>
            <h2>{resource.title}</h2>
            <p>{resource.downloadLink}</p>
            <p>Views: {resource.views}</p>
            <img src={resource.poster.url} alt={resource.title} />
            <p>Category: {resource.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourcePage;
