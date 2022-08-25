import React, {FC} from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';

import {ButtonComponent} from '@hom/svg';
import {Theme} from '@hom/theme';
import {Font} from '@hom/types';

const InputView = styled.View`
  margin-right: 15px;
`;

const InputViewWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 8px 24px;
  width: 100%;
  height: 40px;
`;

const UIInput = styled(TextInput)`
  width: 100%;
  height: 100%;
  font-family: ${Font.Nunito};
`;

interface InputProps {
  placeholder?: string;
}

const Input: FC<InputProps> = ({placeholder}) => {
  return (
    <InputView>
      <ButtonComponent fill={Theme.colors.white} autoSize>
        <InputViewWrapper>
          <UIInput style={{outline: 'none'}} placeholder={placeholder} />
        </InputViewWrapper>
      </ButtonComponent>
    </InputView>
  );
};

export {Input};
