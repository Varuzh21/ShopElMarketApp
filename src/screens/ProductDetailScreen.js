import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { getSingleProductRequest, getProductsRequest } from '../store/actions/products';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import StarRating from '../components/StarRating';
import ProductsSlider from '../components/ProductsSlider';
import Button from '../components/Button';
import User from '../assets/icons/user.svg';

const width = Dimensions.get('window').width;

const ProductDetail = () => {
    const route = useRoute();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { productId } = route.params;

    useEffect(() => {
        (async () => {
            await Promise.all(
                dispatch(getSingleProductRequest(productId)),
                dispatch(getProductsRequest()))
        })()
    }, [productId]);

    const product = useSelector((state) => state.getSingleProductReducer.product) || [];
    const products = useSelector((state) => state.getProductsReducer.products) || [];
    const review = product?.reviews && product.reviews.length > 0 ? product.reviews[0] : null;

    return (
        <ScrollView style={styles.container}>
            <Carousel
                loop
                width={width}
                height={300}
                autoPlay={false}
                data={product.images || []}
                scrollAnimationDuration={1000}
                renderItem={({ item, index }) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </View>
                )}
            />

            <View style={styles.productDetails}>
                <Text style={styles.title}>{product.title || 'No title available'}</Text>
                <StarRating maxRating={5} defaultRating={product.rating || 0} />
                <Text style={styles.price}>${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</Text>
                <Text style={styles.description}>{product.description || 'No description available'}</Text>
            </View>

            <View style={styles.reviewSection}>
                <View style={styles.reviewHeader}>
                    <Text style={styles.reviewTitle}>Review Product</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Review Product", { productId })}>
                        <Text style={styles.butText}>See More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ratingWithCount}>
                    <StarRating maxRating={5} defaultRating={product.rating || 0} />
                    <Text style={styles.ratingText}>{product.rating} ({product.reviews?.length || 0} Reviews)</Text>
                </View>

                <View style={styles.reviewList}>
                    {review ? (
                        <View style={styles.reviewItem}>
                            <View style={styles.reviewerInfo}>
                                <User style={styles.userIcon} />
                                <View style={{ gap: 4 }}>
                                    <Text style={styles.reviewAuthor}>{review.reviewerName}</Text>
                                    <StarRating maxRating={5} defaultRating={review.rating} />
                                </View>
                            </View>
                            <Text style={styles.reviewText}>
                                {review.comment} {" "}
                                air max are always very comfortable fit,
                                clean and just perfect in every way.
                                just the box was too small and scrunched the sneakers up
                                a little bit, not sure if the box was always this small but
                                the 90s are and will always be one of my favorites.
                            </Text>
                        </View>
                    ) : (
                        <Text style={styles.noReviewsText}>No reviews available</Text>
                    )}
                </View>
            </View>

            <View style={{ paddingTop: 23 }}>
                <View style={{ paddingBottom: 12 }}>
                    <Text style={styles.reviewTitle}>You Might Also Like</Text>
                </View>
                <ProductsSlider products={products} />
            </View>

            <View style={{ paddingVertical: 21 }}>
                <Button title="Add To Cart" />
            </View>
        </ScrollView>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    productDetails: {
        paddingTop: 40,
        gap: 8,
    },
    title: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: 'rgb(34, 50, 99)',
        textAlign: 'left',
    },
    price: {
        color: 'rgb(64, 191, 255)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'left',
        marginVertical: 16,
    },
    description: {
        color: 'rgb(144, 152, 177)',
    },
    reviewSection: {
        paddingTop: 16,
    },
    reviewHeader: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewTitle: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
    },
    ratingWithCount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 16,
    },
    ratingText: {
        marginLeft: 8,
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
    },
    butText: {
        color: 'rgb(64, 191, 255)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
    },
    reviewItem: {
        marginBottom: 16,
    },
    reviewerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 20,
    },
    reviewAuthor: {
        color: 'rgb(34, 50, 99)',
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 14,
    },
    reviewText: {
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        marginTop: 8,
    },
    noReviewsText: {
        fontSize: 14,
        color: 'rgb(144, 152, 177)',
        fontFamily: 'Poppins',
        textAlign: 'center',
        paddingVertical: 10,
    },
});