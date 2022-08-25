import React, {FC, useState} from 'react';
import {Linking, View} from 'react-native';

import {ColorName} from '@hoagiesonmain/shared';

import {Link} from '@hom/common';
import {Font, SettingType} from '@hom/types';
import {useApp} from '@hom/context';

interface PhoneNumberProps {
  font?: Font;
  color?: ColorName;
}

const PhoneNumber: FC<PhoneNumberProps> = ({font, color} = {font: Font.NunitoBlack}) => {
  const {getSetting} = useApp();
  const [phoneNo] = useState<string>(getSetting(SettingType.PhoneNumber));

  return (
    <View>
      <Link
        onPress={() => Linking.openURL(`tel:${phoneNo}`)}
        typography={{font, color}}
        text={phoneNo}
      />
    </View>
  );
};

export {PhoneNumber};
