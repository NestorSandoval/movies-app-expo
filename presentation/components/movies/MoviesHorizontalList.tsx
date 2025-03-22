import { View, Text, FlatList } from "react-native";
import React from "react";

import { Movie } from "@/infrastructure/interfaces/movie-interface";
import MoviePoster from "./MoviePoster";

interface Props {
  title: string;
  movies: Movie[];
  className?: string;
}

const MoviesHorizontalList = ({ movies, title, className }: Props) => {
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
        />
      </View>
    </View>
  );
};

export default MoviesHorizontalList;
