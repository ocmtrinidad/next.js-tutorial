type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUsersPosts(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return response.json();
}

async function getAlbumsPosts(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return response.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Initiate requests before awaiting. Adding await to requests will block any requests below it.
  const postsData = getUsersPosts(id);
  const albumsData = getAlbumsPosts(id);
  // Parallel fetching
  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-xtrabold mb-8">User Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Posts</h2>
          <div className="space-y-4">
            {posts.map((post: Post) => (
              <div key={post.id} className="bg-black shadow-md rounded-lg p-6">
                <h3 className="text-lg font-bold mb-3 text-white leading-tight">
                  {post.title}
                </h3>
                <p className="text-white mb-4 leading-relaxed">{post.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Albums</h2>
          <div className="space-y-4">
            {albums.map((album: Album) => (
              <div key={album.id} className="bg-black shadow-md rounded-lg p-6">
                <p className="text-white">{album.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
