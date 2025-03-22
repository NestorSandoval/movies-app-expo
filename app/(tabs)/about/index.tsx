import { View, Text, ScrollView } from "react-native";
import React from "react";

import { useMovies } from "@/presentation/hooks/useMovies";
const AboutHome = () => {
  const { detailQuery } = useMovies();

  return (
    <ScrollView>
      <View>
        <Text className="text-3xl font-bold px-5 bg-red-700 items-center text-center text-white">
          Descipcion de las peliculas
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutHome;
