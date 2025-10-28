"use client";
import { useUser } from '@/helpers/user';
import { deflate } from 'zlib';

function MyComponent() {
  const { user, loading, error } = useUser();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Please log in</div>;
  
  return <div>Welcome, {user.user_metadata.name}!</div>;
}
export default MyComponent