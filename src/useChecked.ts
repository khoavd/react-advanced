import { useState } from 'react';
import { IdValue } from './type';

export function useChecked() {
  const [checkedIds, setCheckedIds] = useState<IdValue[]>([]);

  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = checkedIds?.includes(checkedId);

    let newCheckedIds = isChecked ? checkedIds?.filter((id) => id !== checkedId) : checkedIds?.concat(checkedId);

    setCheckedIds(newCheckedIds);

    console.log(newCheckedIds);
  };

  return { handleCheckChange, checkedIds };
}
