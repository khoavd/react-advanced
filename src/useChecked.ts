import { useEffect, useState } from 'react';
import { IdValue } from './type';

type Params = {
  checkedIds?: IdValue[];
  onCheckedIdsChange?: (checkedIds: IdValue[]) => void;
};

export function useChecked({ checkedIds, onCheckedIdsChange }: Params) {
  const [resolvedCheckedIds, setResolvedCheckedIds] = useState<IdValue[]>(checkedIds || []);

  useEffect(() => {
    const isControlled = checkedIds !== undefined;

    if (isControlled) {
      setResolvedCheckedIds(checkedIds);
    }
  }, [checkedIds]);

  const handleCheckChange = (checkedId: IdValue) => () => {
    const isChecked = resolvedCheckedIds?.includes(checkedId);

    let newCheckedIds = isChecked
      ? resolvedCheckedIds?.filter((id) => id !== checkedId)
      : resolvedCheckedIds?.concat(checkedId);

    if (onCheckedIdsChange) {
      onCheckedIdsChange(newCheckedIds);
    } else {
      setResolvedCheckedIds(newCheckedIds);
    }

    console.log(newCheckedIds);
  };

  return { handleCheckChange, resolvedCheckedIds };
}
