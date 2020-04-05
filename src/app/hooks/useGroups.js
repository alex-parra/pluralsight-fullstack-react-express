import { useSelector } from 'react-redux';

const useGroups = (id = null) => {
  const groups = useSelector((state) => state.groups);

  if (!id) return groups;

  return groups.find((t) => t.id === id);
};

export default useGroups;
