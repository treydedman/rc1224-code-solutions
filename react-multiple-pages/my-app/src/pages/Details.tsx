import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { type Item, readItem } from '../lib/read';

export function Details() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState<Item>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItem(itemId: number) {
      try {
        const item = await readItem(itemId);
        setItem(item);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (itemId) {
      setIsLoading(true);
      loadItem(+itemId);
    }
  }, [itemId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !item) {
    return (
      <div>
        Error Loading Item {itemId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, image, description } = item;

  const handleSave = () => {
    alert(`Saved ${name}`);
    navigate('/');
  };
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link to="/" className="p-3 text-gray-600 cursor-pointer">
            &lt; Back to Dashboard
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={image}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
          </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{description}</p>
          </div>
          <div className="px-4">
            <button onClick={handleSave} className="px-4">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
