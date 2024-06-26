import styled from "styled-components";
import Person from "../assets/Person.svg"

const RepCard = ({ data }) => {
  console.log("data", data);
  return (
    <Container>
      <Img src={Person}/>
      <TopSection>
        <Title> {data.name}</Title>
        <CommitteeSection>
          {data.chair && <Text>Chair: {data.chair}</Text>}
          {data.vicechair && <Text>Vice-Chair: {data.vicechair}</Text>}
          {data.member &&
            data.member.map((e) => (
              <Text>
                {" "}
                {"Member:"}
                {e}
              </Text>
            ))}
        </CommitteeSection>
      </TopSection>
      <Info> Info </Info>
    </Container>
  );
};

export default RepCard;

const Container = styled.div`
    display: flex;
    height: 300px;
    width: 300px;
    border: 4px solid #656565;
    padding: 10px 10px;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    background: ${ props => props.theme.highlight};
`;

const CommitteeSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: center;
    gap: 10px;
`;
const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: 80%;
    gap: 5px;
    font-size: 12px;
`;

const Img = styled.img`
    width: 100%;
    height: 40%;
`;
const Text = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

`;
const Title = styled.div`
    font-weight: 200;
    font-size: 1.4rem;
`;

const Info = styled.a`
    padding: .5rem 1rem;
    margin-bottom: .5rem;
    display: inline-block;
    text-decoration: none;
    transition: all .3s ease-in-out;
    font: 1.1rem "SynNova";
    font-weight: 300;
    text-underline-offset: 10px;
    text-decoration: underline;
        cursor : pointer;
    }
`;
