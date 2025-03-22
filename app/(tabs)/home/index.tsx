import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";

import MoviesHorizontalList from "@/presentation/components/movies/MoviesHorizontalList";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import { useMovies } from "@/presentation/hooks/useMovies";

const HomeScreen = () => {
  const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="yellow" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <Text className="text-3xl font-bold px-5 bg-red-700 items-center text-center text-white">
          Las mejores peliculas
        </Text>

        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        <MoviesHorizontalList
          className="mb-5"
          title="Populares"
          movies={popularQuery.data ?? []}
        />

        <MoviesHorizontalList
          className="mb-5"
          title="Mejor calificadas"
          movies={topRatedQuery.data ?? []}
        />

        <MoviesHorizontalList
          className="mb-5"
          title="Proximamente"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
