import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ProductList from '../../components/ProductList/ProductList';
import {useDispatch, useSelector} from 'react-redux';
import {productsSelector} from '../../store/selectors/productSelector';
import styles from '../../RootStyles';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {createProduct, updateProduct} from '../../store/actions/productActions';


const ProductsScreen = (props) => {
  const id = props.route.params.id;
  const dispatch = useDispatch();
  console.log('props = ', id);
  const [addMode, setAddMode] = useState(false);
  const products = useSelector(productsSelector(id));
  const addProduct = () => {
    setAddMode(true);
  }
  const onItemCheck = () => {
    dispatch(updateProduct({
      completed: false,
    }))
  }
  const onItemUnCheck = () => {

  }
  const onItemTextPress = () => {

  }

  return (
    <View style={styles.mainContainer}>
      <Header Center={'Products screen'} />
      <View style={styles.body}>

        <ProductList
          list={products}
          onItemCheck={onItemCheck}
          onItemUnCheck={onItemUnCheck}
          onItemTextPress={onItemTextPress}

        />
        {
          addMode ? (
            <Text>addMode</Text>
          ) : (
            <Button
              title={'Add product'}
              onPress={addProduct}
            />
          )
        }
      </View>
    </View>
  );
};

export default ProductsScreen;
