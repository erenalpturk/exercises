import React, { useMemo } from 'react';

function FilteredList({ list }) {
  // Use useMemo to memoize the filtered list
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h1>Filtered List</h1>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>
            {item.name} (Age: {item.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
