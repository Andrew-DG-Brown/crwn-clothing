import styled from "styled-components";

export const CheckoutPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
`;

export const CheckoutSummary = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const SummaryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const TextAndCostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: ${(props) => (props.total ? "0 0 30px 0" : "0 0 16px 0")};
  border-top: ${(props) => (props.total ? "1px solid #e4e4e7" : "")};
  border-bottom: ${(props) => (props.total ? "1px solid #e4e4e7" : "")};
  padding: ${(props) => (props.total ? "20px 0" : "")};
  font-weight: ${(props) => (props.bolded ? "bold" : "")};
`;
