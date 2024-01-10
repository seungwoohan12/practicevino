/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import mainLogo from "../assets/mainlogo.svg";
import lineImg from "../assets/line_img.svg";
import videoImg from "../assets/firstvideo.svg";
import errorImg from "../assets/error.svg";
import closeImg from "../assets/close.svg";
import signupImg from "../assets/signup.svg";


const Login = () => {
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInfo;

  const handleChangeEmail = (e) => {
    const emailRegex =
      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const emailCurrent = e.target.value;
    setLoginInfo({
      ...loginInfo,
      email: emailCurrent,
    });

    if (!emailRegex.test(emailCurrent)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };
  const handleChangePassword = (e) => {
    const passwordCurrent = e.target.value;
    setLoginInfo({
      ...loginInfo,
      password: passwordCurrent,
    });
    var regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    if (passwordCurrent.length < 8 || passwordCurrent.length > 16) {
      setIsPassword(false);
    } else if (regExp.test(passwordCurrent)) {
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };



  return (
    <PageComponent>
      <LoginTotalComponent>
        <Image src={mainLogo} alt="logo" />
        <TextDiv>로그인</TextDiv>
        <TextDiv textTransform="none" fontSize="16px" color="#BBB" fontWeight="400">
          계정에 로그인하고 나만의 영상 아카이빙을 시작해요
        </TextDiv>
        <LineTotalComponent>
          <FlexBox flexDirection="row">
            <Image src={lineImg} alt="line" width="266px" height="1.7px" />
            <TextDiv textTransform="none" fontSize="16px" color="#BBB" fontWeight="400">
              OR
            </TextDiv>
            <Image src={lineImg} alt="line" width="266px" height="1.7px" />
          </FlexBox>
        </LineTotalComponent>
        <TextDiv
          margin="13px 0px 0px 50px"
          textTransform="none"
          fontSize="16px"
          color="#787878"
          fontWeight="400"
          style={{ alignSelf: "flex-start" }}
        >
          이메일 주소
        </TextDiv>
        <LoginInput
          onChange={handleChangeEmail}
          type="text"
          placeholder="이메일을 입력해주세요."
          name="email"
          value={email}
          autocomplete="off"
        />
        <TextDiv
          margin="20px 0px 0px 50px"
          textTransform="none"
          fontSize="16px"
          color="#787878"
          fontWeight="400"
          style={{ alignSelf: "flex-start" }}
        >
          비밀번호
        </TextDiv>
        <LoginInput
          onChange={handleChangePassword}
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          value={password}
          autocomplete="off"
        />
        {isEmail && isPassword ? (
          <LoginButton color="#fff" backgroundColor="#EC8007">
            로그인
          </LoginButton>
        ) : (
          <LoginButton>로그인</LoginButton>
        )}
        <TextTotalComponent margin="40px 0px 0px 0px">
          <TextDiv fontSize="14px" color="#BBB" fontWeight="400">
            계정이 기억나지 않으신가요?
          </TextDiv>
          <TextDiv margin="0px 0px 0px 10px" fontSize="14px" color="#EC8007" fontWeight="400">
            이메일 찾기
          </TextDiv>
          <TextDiv margin="0px 0px 0px 10px" fontSize="14px" color="#EC8007" fontWeight="400">
            비밀번호 찾기
          </TextDiv>
        </TextTotalComponent>
        <TextTotalComponent margin="10px 0px 0px 0px">
          <TextDiv fontSize="14px" color="#BBB" fontWeight="400">
            아직 계정이 없으신가요
          </TextDiv>
          <TextDiv margin="0px 0px 0px 10px" fontSize="14px" color="#EC8007" fontWeight="400">
            이메일로 회원가입
          </TextDiv>
        </TextTotalComponent>
      </LoginTotalComponent>
      <Image
        style={{ zIndex: "-1", position: "absolute", left: "520px", top: "92px" }}
        src={videoImg}
        alt="pet"
        width="1104px"
        height="808px"
      />
      {openErrorModal ? (
        <ModalDiv>
          <CloseImage src={closeImg} alt="X" width="28px" height="28px" />
          <Image margin="68px 0px 0px 0px" src={errorImg} alt="error" width="56px" height="56px" />
          <TextDiv margin="12px 0px 0px 0px" fontSize="24px">
            로그인 오류
          </TextDiv>
          <TextDiv margin="12px 0px 0px 0px" textTransform="none" fontSize="16px" color="#BBB">
            아이디 혹은 비밀번호를 다시 확인해주세요!
          </TextDiv>
          <LoginButton
            margin="48px 0px 0px 0px"
            color="#fff"
            backgroundColor="#EC8007"
            width="600px"
            height="58px"
          >
            다시 입력하기
          </LoginButton>
        </ModalDiv>
      ) : (
        <></>
      )}
      {openSignUpModal ? (
        <ModalDiv height="384px">
          <CloseImage src={closeImg} alt="X" width="28px" height="28px" />
          <Image
            margin="68px 0px 0px 0px"
            src={signupImg}
            alt="signup"
            width="56px"
            height="56px"
          />
          <TextDiv margin="12px 0px 0px 0px" fontSize="24px">
            아직 비회원이시네요!
          </TextDiv>
          <TextDiv margin="12px 0px 0px 0px" textTransform="none" fontSize="16px" color="#BBB">
            앗, 아직 회원이 아니시군요!
          </TextDiv>
          <TextDiv textTransform="none" fontSize="16px" color="#BBB">
            회원가입으로 우리 함께해요
          </TextDiv>
          <LoginButton
            margin="48px 0px 0px 0px"
            color="#fff"
            backgroundColor="#EC8007"
            width="600px"
            height="58px"
          >
            다시 입력하기
          </LoginButton>
        </ModalDiv>
      ) : (
        <></>
      )}
    </PageComponent>
  );
};

export default Login;

const PageComponent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: ${(props) => props.flexDirection || "column"};
`;

const LoginTotalComponent = styled.div`
  position: absolute;
  left: 128px;
  top: 209px;
  display: flex;
  width: 594px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: ${(props) => props.width || "68px"};
  height: ${(props) => props.height || "39.667px"};
  object-fit: contain;
  margin: ${(props) => props.margin || "0px"};
`;

const CloseImage = styled(Image)`
  position: absolute;
  top: 40px;
  right: 61px;
`;

const TextTotalComponent = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${(props) => props.margin || "0px"};
`;

const TextDiv = styled.div`
  color: ${(props) => props.color || "#ec8007"};
  text-transform: ${(props) => props.textTransform || "capitalize"};
  font-size: ${(props) => props.fontSize || "36px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  font-style: normal;
  line-height: 160%; /* 57.6px */
  font-family: NanumSquareRound;
  margin: ${(props) => props.margin || "0px"};
`;

const LineTotalComponent = styled.div`
  width: 594px;
  height: 24px;
`;

const LoginInput = styled.input`
  display: flex;
  width: 494px;
  height: 56px;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200, #e8e8e8);
  padding: 0px 0px 0px 20px;
  color: var(--Main, #ec8007);
  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  outline: none;
  &:hover {
    border: 1.5px solid #ec8007;
  }
  &:focus {
    border: 1.5px solid #ec8007;
    border-color: #ec8007;
  }
  &::placeholder {
    color: var(--gray-300, #bbb);

    /* Body1 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 25.6px */
  }
`;

const LoginButton = styled.button`
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 12px;

  font-family: NanumSquareRound;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  margin: 20px 0px 0px 0px;
  border: none;
  width: ${(props) => props.width || "494px"};
  height: ${(props) => props.height || "56px"};
  color: ${(props) => props.color || "#bbb"};
  background-color: ${(props) => props.backgroundColor || "#f3f3f3"};
  margin: ${(props) => props.margin || "0px"};
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 33%;
  left: 33%;
  z-index: 2;
  display: flex;
  width: 700px;
  height: ${(props) => props.height || "358px"};
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: var(--White, #fff);

  /* dropdown */
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.1);
`;