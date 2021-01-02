import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'react-native';
import {fetchEntityStart} from '../../store/actions/entityActions';
import Header from '../../components/Header/Header';
import CheckList from '../../components/CheckList/CheckList';
import styles from '../../RootStyles';
import LeftBar from '../../LeftBar/LeftBar';
import RightBar from '../../RightBar/RightBar';

const ShoppingScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntityStart({id: 2}));
  },  [dispatch]);
  const {shoppings} = useSelector((state) => state.productReducer);

  return (
    <View style={styles.mainContainer}>
      <Header
        Left={LeftBar}
        Right={RightBar}
        Center={'Shopping List'}
      />
      <View style={styles.body}>
        <CheckList list={shoppings} />
        {/*<Link*/}
        {/*  to={`/`}*/}
        {/*>*/}
        {/*  <Text>Home</Text>*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  to={`Library`}*/}
        {/*>*/}
        {/*  <Text>Dictionary</Text>*/}
        {/*</Link>*/}
        {/*<Icon*/}
        {/*  name="checkbox-blank-circle-outline"*/}
        {/*  backgroundColor="#3b5998"*/}
        {/*>*/}
        {/*  Login with Facebook*/}
        {/*</Icon>*/}
        {/*<Icon*/}
        {/*  name="checkbox-marked-circle-outline"*/}
        {/*  backgroundColor="#3b5998"*/}
        {/*>*/}
        {/*  Login with Facebook*/}
        {/*</Icon>*/}
      </View>

    </View>
  );
};
export default ShoppingScreen;
