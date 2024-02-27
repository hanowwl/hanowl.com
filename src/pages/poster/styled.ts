import Image from "next/image";

import styled from "@emotion/styled";

export const PostPageContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

export const PostPageLogo = styled(Image)`
  width: 20rem;
  height: 100%;
`;

export const PostPageQrWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14rem;
`;

export const PostPageQr = styled(Image)`
  width: 24rem;
  height: 100%;
  border-radius: 1.4rem;
`;
