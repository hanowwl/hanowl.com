import { HanumLogoPng, HanumQRPng } from "src/assets";
import { Container, Text } from "src/components";

import * as S from "./styled";

export default function PosterPage() {
  return (
    <S.PostPageContainer>
      <Container>
        <S.PostPageTextContainer>
          <S.PostPageLogo src={HanumLogoPng} alt="한움 로고" />
          <Text size={2} weight={600}>
            해당 서비스는 한움 앱에서만 이용이 가능합니다.
          </Text>
          <Text size={2} weight={600}>
            휴대폰으로 아래 QR 코드를 스캔해주세요.
          </Text>
        </S.PostPageTextContainer>
        <S.PostPageQrWrapper>
          <S.PostPageQr src={HanumQRPng} alt="한움 QR 코드" />
        </S.PostPageQrWrapper>
      </Container>
    </S.PostPageContainer>
  );
}
