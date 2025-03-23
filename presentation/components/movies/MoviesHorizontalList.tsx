import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import React, { useRef } from "react";

import { Movie } from "@/infrastructure/interfaces/movie-interface";
import MoviePoster from "./MoviePoster";

interface Props {
  title: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}

const MoviesHorizontalList = ({
  movies,
  title,
  className,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    console.log("Cargar siguientes peliculas");
    loadNextPage && loadNextPage();
  };

  return (
    <View className={`${className} overflow-hidden`}>
      {title && <Text className="text-3xl font-bold px-4">{title}</Text>}

      <View className="w-full overflow-hidden">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={movies}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => (
            <MoviePoster id={item.id} poster={item.poster} smallPoster />
          )}
          onScroll={onScroll}
        />
      </View>
    </View>
  );
};

export default MoviesHorizontalList;
