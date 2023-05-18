import { LoadMoreBtn } from './Button.styled';

export const Button = ({ LoadMoreBtnClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={LoadMoreBtnClick}>
      Load more
    </LoadMoreBtn>
  );
};