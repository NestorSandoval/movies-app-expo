import { View, Text, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import { useMovie } from "@/presentation/hooks/useMovie";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieCast from "@/presentation/components/movie/MovieCast";
import { ScrollView } from "react-native-gesture-handler";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mg-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        <MovieHeader
          originalTitle={movieQuery.data.title}
          poster={movieQuery.data.poster}
          title={movieQuery.data.title}
        />
        <MovieDescription movie={movieQuery.data} />

        <MovieCast cast={castQuery.data ?? []} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
