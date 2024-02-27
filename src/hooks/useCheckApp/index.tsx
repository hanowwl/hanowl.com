import { useRouter } from "next/router";

export const useCheckApp = () => {
  const router = useRouter();
  console.log(router.query);
};
