import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducer";
import { AppDispatch, useAppDispatch } from "../redux/store";
import { getCatsFetch } from "../redux/catSlice";
import styled from "styled-components";
import LazyImage from "./LazyImage";
import { mobile } from "../responsive";

function Cat() {
  const dispatch: AppDispatch = useAppDispatch();

  const { isLoading, error, cats } = useSelector(
    (state: RootState) => state.cats
  );

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  if (isLoading) {
    <div>Loading...</div>;
  }
  if (error) {
    <div>Error: {error.message} </div>;
  }

  return (
    <Container>
      <Header>A Project with Redux-Saga and Optimizing Performance</Header>

      {cats.map((cat: any) => (
        <Wrapper key={cat.id}>
          <ImageContainer>
            <LazyImage cat={cat} />
          </ImageContainer>
          <Content>
            <Title>Lorem ipsum dolor sit, amet consectetur!</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              minus. Assumenda, optio saepe beatae possimus dicta a voluptates
              sint eos.
            </Desc>
          </Content>
        </Wrapper>
      ))}
    </Container>
  );
}

export default Cat;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dfdfdf;
`;
const Header = styled.h2`
  text-transform: capitalize;
  background-color: white;
  font-weight: 400;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  text-align: center;
  ${mobile({ fontSize: "20px", margin: "10px" })};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50vw;
  height: 20vh;
  margin: 10px 0;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 8px;
  ${mobile({ maxWidth: "90vw", alignItems: "flex-start" })};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 20vh;
`;
const Content = styled.div`
  flex: 2;
  padding: 0 0 0 20px;
`;
const Title = styled.h5`
  ${mobile({ fontSize: "16px" })};
`;
const Desc = styled.p`
  font-size: 14px;
  margin-top: 10px;
  ${mobile({ fontSize: "14px" })};
`;
