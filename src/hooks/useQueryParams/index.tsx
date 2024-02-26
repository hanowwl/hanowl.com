import { useMemo } from "react";

import { useRouter } from "next/router";

export const useQueryParams = <
  T extends Record<string, string | boolean> = Record<string, string>,
>(): Partial<T> => {
  const router = useRouter();
  return useMemo(() => router.query as Partial<T>, [router.query]);
};
