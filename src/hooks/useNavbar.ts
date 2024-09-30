import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
};

export default useNavbar;